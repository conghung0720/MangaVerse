import { current } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { response } from "express";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

interface MyApiRespone {
  length: number;
  data: any[];
}

interface Params {
  page: string;
}

const UseCheckParams = async () => {
  const [isSearchParams, setIsSearchParams] = useSearchParams();
  let currentPage = isSearchParams.get("page");
  return currentPage;
};

export const apiManga = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000" }),
  endpoints: (builder) => ({
    getAllSize: builder.query({
      query: () => `/`,
      transformResponse: (response: MyApiRespone = { length: 0, data: [] }) => {
        return response?.length;
      },
    }),
    filterData: builder.query({
      query: ({ first, last, search, tags }) =>
        `/custom?first=${first}&last=${last + 1}&search=${search}&tags=${tags}`,
    }),
    getDetails: builder.query({
      query: ({ url }) => `/link/${url}`,
    }),
    getImages: builder.query({
      query: ({ nameComics, chapter }) => `/lhManga/${nameComics}/${chapter}`,
    }),
    getNewest: builder.query({
      query: ({ first, last }) => `/?first=${first}&last=${last + 1}`,
    }),
  }),
});

export const {
  useGetNewestQuery,
  useGetAllSizeQuery,
  useFilterDataQuery,
  useGetDetailsQuery,
  useGetImagesQuery,
} = apiManga;
