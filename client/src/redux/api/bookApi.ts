import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BOOK } from "../constant";

export const bookApi = createApi({
  reducerPath: "bookApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_SERVER_PORT}/${API_BOOK}`,
  }),
  endpoints: (builder) => ({}),
});

export const {} = bookApi;
