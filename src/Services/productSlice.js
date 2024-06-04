import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const categoriesApi = createApi({
  reducerPath: "categoriesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://northwind.vercel.app/api/" }),
  endpoints: (builder) => ({
    getAllCategories: builder.query({
      query: () => `categories`,
    }),
    getAllCategoriesById: builder.query({
      query: (id) => `categories/${id}`,
    }),
    deleteCategoriesById: builder.mutation({
    query:(id)=>({

        url:`categories/${id}`,
        method:"DELETE",
    }),
    }),
    postCategory:builder.mutation({
        query:(payload)=>({
            url:`categories`,
            method:"POST",
            body:payload,
            headers:{
                "Content-Type":"application/json"
            }
           
        })
    }),
    putCategory:builder.mutation({
        query:(id,payload)=>({
            url:`categories/${id}`,
            method:"PUT",
            body:payload,
            headers:{
                "Content-Type":"application/json"
            }
           
        })
    })
  }),
});
export const {usePutCategoryMutation,usePostCategoryMutation, useGetAllCategoriesByIdQuery, useGetAllCategoriesQuery,useDeleteCategoriesByIdMutation } =
  categoriesApi;
