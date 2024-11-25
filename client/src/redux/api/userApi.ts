import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_USER } from "../constant";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_SERVER_PORT}/${API_USER}`,
  }),
  endpoints: (builder) => ({
    registerUser: builder.mutation<any, any>({
      query: (name) => `/${name}`,
    }),
  }),
});

export const { useRegisterUserMutation } = userApi;
