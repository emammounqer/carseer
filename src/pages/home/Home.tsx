import { Card } from "@/components/ui/card";
import { useMakeQuery } from "@/hooks/apiQueries/useMakeQuery";
import type { Make } from "@/types/api";
import { Combobox } from "@/components/combobox";
import { useVehicleTypeFilter } from "@/context/VehicleTypeFilterProvider";
import { Models } from "@/pages/home/components/Models";
import { VehicleTypesList } from "@/pages/home/components/VehicleTypes";
import LoadingPage from "../LoadingPage";

export default function Home() {
  const { make, year, setMake, setYear } = useVehicleTypeFilter();

  const {
    data: makesResponse,
    isLoading: makeLoading,
    error: makeError,
  } = useMakeQuery();

  if (makeLoading) return <LoadingPage />;
  if (makeError)
    return <div className="text-destructive">Error: {makeError.message}</div>;

  return (
    <div>
      <header className=" w-full backdrop-blur-lg p-2 bg-primary shadow-sm">
        <div className="flex flex-row gap-2 items-center container mx-auto">
          <img
            src="/logo-modern.svg"
            alt="CarSeer Logo"
            className="h-8"
            data-testid="nav-logo"
          />
          <h1 className="text-2xl font-bold text-primary-foreground">
            Carseer
          </h1>
        </div>
      </header>

      <div className="bg-background p-4 flex flex-col gap-4 container mx-auto">
        <Card className="flex flex-row gap-4 p-4 sticky z-50 top-0 ">
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

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 ">
          <div className="sm:sticky sm:top-24">
            <Models />
          </div>
          <div>
            <div className="sm:sticky sm:top-24">
              <VehicleTypesList />
            </div>
          </div>
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
