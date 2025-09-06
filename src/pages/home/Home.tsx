import { Card } from "@/components/ui/card";
import { useMakeQuery } from "@/hooks/apiQueries/useMakeQuery";
import type { Make } from "@/types/api";
import { Combobox } from "@/components/combobox";
import { useVehicleTypeFilter } from "@/context/VehicleTypeFilterProvider";
import { Models } from "@/pages/home/components/Models";
import { VehicleTypesList } from "@/pages/home/components/VehicleTypes";

export default function Home() {
  const { make, year, setMake, setYear } = useVehicleTypeFilter();

  const {
    data: makesResponse,
    isLoading: makeLoading,
    error: makeError,
  } = useMakeQuery();

  if (makeLoading) return <div>Loading...</div>;
  if (makeError) return <div>Error: {makeError.message}</div>;

  return (
    <div className="min-h-screen bg-background p-4 flex flex-col gap-4 ">
      <Card className="flex flex-row gap-4 p-4">
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

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Models />
        </div>
        <div>
          <VehicleTypesList />
        </div>
      </div>
    </div>
  );
}

const mapMakeToOptions = (makes: Make[]) => {
  return makes.map((make) => ({
    value: make.Make_ID.toString(),
    label: `${make.Make_Name} (${make.Make_ID})`,
  }));
};

const getYears = () => {
  const currentYear = new Date().getFullYear();
  return Array.from({ length: 100 }, (_, i) => currentYear - i).map((year) => ({
    value: year.toString(),
    label: year.toString(),
  }));
};
