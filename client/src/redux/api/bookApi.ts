import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const bookApi = createApi({
  reducerPath: "bookApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000/api/book" }),
  endpoints: (builder) => ({
    registerUser: builder.mutation<any, any>({
      query: (name) => `/${name}`,
    }),
  }),
});

export const { useRegisterUserMutation } = bookApi;
