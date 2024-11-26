import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_BOOK } from "../constant";
import { BookTS } from "../../types";

export const bookApi = createApi({
  reducerPath: "bookApi",
  tagTypes: ["Books"],
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_SERVER_PORT}/${API_BOOK}`,
    credentials: "include",
    prepareHeaders(headers) {
      const token = JSON.parse(localStorage.getItem("token")!);
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),

  endpoints: (builder) => ({
    allBooks: builder.query<{ data: BookTS[] }, void>({
      providesTags: ["Books"],
      query: () => ({
        headers: {
          "Content-Type": "application/json",
        },
        url: `/all-books`,
        method: "GET",
      }),
    }),
    singleBook: builder.query<BookTS[], string>({
      query: (_id) => ({
        headers: {
          "Content-Type": "application/json",
        },
        url: `/${_id}`,
        method: "GET",
      }),
    }),
    addBook: builder.mutation<{ message: string; data: BookTS[] }, BookTS>({
      query: (data) => ({
        headers: {
          "Content-Type": "application/json",
        },
        url: `/create-book`,
        method: "POST",
        body: data,
      }),
    }),
    updateBook: builder.mutation<
      { message: string; data: BookTS[] },
      { _id: string; data: BookTS }
    >({
      query: ({ _id, data }) => ({
        headers: {
          "Content-Type": "application/json",
        },
        url: `/update-book/${_id}`,
        method: "PUT",
        body: data,
      }),
    }),
    deleteBook: builder.mutation<{ message: string }, string>({
      query: (_id) => ({
        headers: {
          "Content-Type": "application/json",
        },
        url: `/delete-book/${_id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useAllBooksQuery,
  useSingleBookQuery,
  useAddBookMutation,
  useUpdateBookMutation,
  useDeleteBookMutation,
} = bookApi;
export default bookApi;
