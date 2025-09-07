import { DataTable } from "@/components/ui/data-table";
import { useVehicleTypeFilter } from "@/context/VehicleTypeFilterProvider";
import { useVehicleTypesQuery } from "@/hooks/apiQueries/useVehicleTypesQuery";

import type { Vehicle } from "@/types/api";
import type { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Vehicle>[] = [
  {
    accessorKey: "VehicleTypeId",
    header: "Vehicle Type ID",
  },
  {
    accessorKey: "VehicleTypeName",
    header: "Vehicle Type",
  },
];

function VehicleTypesList() {
  const { make } = useVehicleTypeFilter();

  const {
    data: vehicleTypesResponse,
    isLoading,
    error,
  } = useVehicleTypesQuery({
    makeId: make || 0,
  });

  return (
    <DataTable
      columns={columns}
      data={vehicleTypesResponse?.Results || []}
      isLoading={isLoading}
      error={error}
      noResultsMessage={make ? "No vehicle types found." : "Select a make."}
    />
  );
}

export { VehicleTypesList };
