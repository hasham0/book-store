import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_ORDER } from "../constant";

export const orderApi = createApi({
  reducerPath: "orderApi",
  tagTypes: ["orders"],
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_SERVER_PORT}/${API_ORDER}`,
  }),
  endpoints: (builder) => ({}),
});

export const {} = orderApi;
