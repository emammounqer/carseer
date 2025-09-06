import React from "react";

type VehicleTypeFilterCtx = {
  make: number | null;
  year: number | null;
  setMake: (make: number | null) => void;
  setYear: (year: number | null) => void;
};

export const VehicleTypeFilterCtx = React.createContext<VehicleTypeFilterCtx>(
  undefined!
);

export function VehicleTypeFilterProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [make, setMake] = React.useState<number | null>(null);
  const [year, setYear] = React.useState<number | null>(null);

  const setMakeHandler = (make: number | null) => {
    setMake(make);
  };

  const setYearHandler = (year: number | null) => {
    setYear(year);
  };

  return (
    <VehicleTypeFilterCtx.Provider
      value={{ make, year, setMake: setMakeHandler, setYear: setYearHandler }}
    >
      {children}
    </VehicleTypeFilterCtx.Provider>
  );
}

export function useVehicleTypeFilter() {
  const context = React.useContext(VehicleTypeFilterCtx);
  if (!context) {
    throw new Error(
      "useVehicleTypeFilter must be used within a VehicleTypeFilterProvider"
    );
  }
  return context;
}
