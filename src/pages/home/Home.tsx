import { Card } from "@/components/ui/card";
import { useMakeQuery } from "@/hooks/apiQueries/useMakeQuery";
import type { Make } from "@/types/api";
import { Combobox } from "@/components/combobox";
import { useVehicleTypeFilter } from "@/context/VehicleTypeFilterProvider";
import { useModelQuery } from "@/hooks/apiQueries/useModelQuery";
import { useVehicleTypesQuery } from "@/hooks/apiQueries/useVehicleTypesQuery";

export default function Home() {
  const { make, year, setMake, setYear } = useVehicleTypeFilter();

  const {
    data: makesResponse,
    isLoading: makeLoading,
    error: makeError,
  } = useMakeQuery();

  const { data: modelsResponse } = useModelQuery({
    makeId: make || 0,
    modelYear: year || 0,
  });

  const { data: vehicleTypesResponse } = useVehicleTypesQuery({
    makeId: make || 0,
  });

  if (makeLoading) return <div>Loading...</div>;
  if (makeError) return <div>Error: {makeError.message}</div>;

  return (
    <div className="min-h-screen bg-background p-4">
      <Card>
        <Combobox
          options={mapMakeToOptions(makesResponse?.Results || [])}
          value={make?.toString()}
          onChange={(value) => setMake(value ? parseInt(value) : null)}
        ></Combobox>

        <Combobox
          options={getYears()}
          value={year?.toString()}
          onChange={(value) => setYear(value ? parseInt(value) : null)}
        ></Combobox>
      </Card>

      <div>
        <h2>Models</h2>
        <pre>{JSON.stringify(modelsResponse, null, 2)}</pre>
      </div>

      <div>
        <h2>Vehicle Types</h2>
        <pre>{JSON.stringify(vehicleTypesResponse, null, 2)}</pre>
      </div>
    </div>
  );
}

const mapMakeToOptions = (makes: Make[]) => {
  return makes.map((make) => ({
    value: make.Make_ID.toString(),
    label: make.Make_Name,
  }));
};

const getYears = () => {
  const currentYear = new Date().getFullYear();
  return Array.from({ length: 100 }, (_, i) => currentYear - i).map((year) => ({
    value: year.toString(),
    label: year.toString(),
  }));
};
