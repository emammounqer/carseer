import { useQuery } from "@tanstack/react-query";
import { config } from "../../config";
import axios from "axios";
import type { Vehicle, Response } from "../../types/api";

export const useVehicleTypesQuery = ({ makeId }: { makeId: number }) => {
  return useQuery({
    queryKey: ["vehicleTypes", makeId],
    queryFn: async () => {
      const response = await axios.get<Response<Vehicle[]>>(
        `${config.apiBaseUrl}/vehicles/GetVehicleTypesForMakeId/${makeId}?format=json`
      );
      return response.data;
    },
  });
};
