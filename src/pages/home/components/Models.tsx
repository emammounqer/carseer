import { DataTable } from "@/components/ui/data-table";
import { useVehicleTypeFilter } from "@/context/VehicleTypeFilterProvider";
import { useModelQuery } from "@/hooks/apiQueries/useModelQuery";
import type { Model } from "@/types/api";
import type { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Model>[] = [
  {
    accessorKey: "Model_ID",
    header: "Model ID",
    enableColumnFilter: true,
    enableSorting: true,
  },
  {
    accessorKey: "Model_Name",
    header: "Model Name",
    enableColumnFilter: true,
    enableSorting: true,
  },
];

function Models() {
  const { make, year } = useVehicleTypeFilter();

  const { data: modelsResponse, isLoading } = useModelQuery({
    makeId: make || 0,
    modelYear: year || 0,
  });

  return (
    <DataTable
      columns={columns}
      data={modelsResponse?.Results || []}
      isLoading={isLoading}
    />
  );
}

export { Models };
