import {createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"


export const productsApi = createApi ({
    reducerPath: "prodcutsApi",
    baseQuery: fetchBaseQuery({baseUrl: "http://127.0.0.1:8000"}),
    endpoints: (builder) => ({
        getAllProducts : builder.query({
            query: () => "/store/products/",
        }),
    }),
 
});

export const { useGetAllProductsQuery, useGetSingleProductQuery } = productsApi;
