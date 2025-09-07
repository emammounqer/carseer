import { Combobox } from "@/components/combobox";
import { useVehicleTypeFilter } from "@/context/VehicleTypeFilterProvider";
import { useMakeQuery } from "@/hooks/apiQueries/useMakeQuery";
import { useMemo, useState } from "react";
import LoadingPage from "@/pages/LoadingPage";
import type { Make } from "@/types/api";

export function MakeSelect() {
  const { make, setMake } = useVehicleTypeFilter();
  const [search, setSearch] = useState("");

  const {
    data: makesResponse,
    isLoading: makeLoading,
    error: makeError,
  } = useMakeQuery();

  const makeIndex = useMemo(() => {
    return makesResponse?.Results?.findIndex((m) => m.Make_ID === make) || 0;
  }, [makesResponse, make]);

  const startIndex = useMemo(() => {
    return search ? 0 : makeIndex;
  }, [makeIndex, search]);

  const endIndex = useMemo(() => {
    return startIndex + 50;
  }, [startIndex]);

  if (makeLoading) return <LoadingPage />;
  if (makeError)
    return <div className="text-destructive">Error: {makeError.message}</div>;

  const makesOptions = (makesResponse?.Results || [])
    .filter((make) =>
      search
        ? make.Make_Name.toLowerCase().includes(search.toLowerCase())
        : true
    )
    .slice(startIndex, endIndex)
    .map((make) => mapMakeToOption(make));

  return (
    <Combobox
      placeholder="Select Make"
      options={makesOptions}
      value={make?.toString()}
      onChange={(value) => setMake(value ? parseInt(value) : null)}
      setSearch={setSearch}
      width="w-[300px]"
    ></Combobox>
  );
}

const mapMakeToOption = (makes: Make) => ({
  value: makes.Make_ID.toString(),
  label: `${makes.Make_Name} (${makes.Make_ID})`,
});
