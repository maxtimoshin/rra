import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const goodsApi = createApi({
    reducerPath: 'goodsApi',
    tagTypes: ['Products'],
    baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: (limit = '') => `products${limit && `?limit=${limit}`}`,
            providesTags: (result) =>
                result
                    ? [
                        ...result.map(({ id }) => ({ id, type: 'Products' })),
                        { id: 'LIST', type: 'Products' },
                    ]
                    : [{ id: 'LIST', type: 'Products' }],
                    
        }),
        addProduct: builder.mutation({
            query: (body) => ({
                url: 'products',
                method: 'POST',
                body,
            }),
            invalidatesTags: [{ id: 'LIST', type: 'Products' }]
        }),
        deleteProduct: builder.mutation({
            query: (id) => ({
                url: `products/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: [{ id: 'LIST', type: 'Products' }]
        })
    })
})

export const { useGetProductsQuery, useAddProductMutation, useDeleteProductMutation } = goodsApi

