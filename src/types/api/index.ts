export type Response<T> = {
  Count: number;
  Message: string;
  SearchCriteria: string | null;
  Results: T;
};

export type Make = {
  Make_ID: number;
  Make_Name: string;
};

export type Vehicle = {
  VehicleTypeId: number;
  VehicleTypeName: string;
};

export type Model = {
  Make_ID: number;
  Make_Name: string;
  Model_ID: number;
  Model_Name: string;
};
