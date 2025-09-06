import { useQuery } from "@tanstack/react-query";
import { config } from "../../config";
import axios from "axios";
import type { Model, Response } from "../../types/api";

export const useModelQuery = ({
  makeId,
  modelYear,
}: {
  makeId: number;
  modelYear: number;
}) => {
  return useQuery({
    queryKey: ["models", makeId, modelYear],
    queryFn: async () => {
      const response = await axios.get<Response<Model[]>>(
        `${config.apiBaseUrl}vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${modelYear}?format=json`
      );
      return response.data;
    },
    enabled: !!makeId && !!modelYear,
  });
};
