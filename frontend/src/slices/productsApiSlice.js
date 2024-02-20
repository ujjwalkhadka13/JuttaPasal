import { PRODUCTS_URL } from "../constants";
import { apiSlice } from "./apiSlices";

export const productsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => ({
                url: PRODUCTS_URL,
            }),
            keepUnusedDatafor: 5,

        
        }),
        getProductDetials: builder.query({
            query: (productId) => ({
                url: `${PRODUCTS_URL}/${productId}`,

            }),
            keepUnusedDataFor: 5,


        }),
    }),
    
});

export const { useGetProductsQuery, useGetProductDetialsQuery } = productsApiSlice;