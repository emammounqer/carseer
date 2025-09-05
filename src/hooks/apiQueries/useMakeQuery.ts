import { useQuery } from "@tanstack/react-query";
import { config } from "../../config";
import axios from "axios";
import type { Make, Response } from "../../types/api";

export const useMakeQuery = () => {
  return useQuery({
    queryKey: ["make"],
    queryFn: async () => {
      const response = await axios.get<Response<Make[]>>(
        `${config.apiBaseUrl}/vehicles/getallmakes?format=json`
      );
      return response.data;
    },
  });
};
