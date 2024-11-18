import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/api/user" }),
  endpoints: (builder) => ({
    registerUser: builder.mutation<any, any>({
      query: (name) => `/${name}`,
    }),
  }),
});

export const { useRegisterUserMutation } = userApi;
