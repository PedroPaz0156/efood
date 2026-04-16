import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { RestauranteInfos } from '../pages/Home'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api-ebac.vercel.app/api/efood/restaurantes'
  }),
  endpoints: (builder) => ({
    getRestaurantes: builder.query<RestauranteInfos[], void>({
      query: () => ''
    }),
    getCardapio: builder.query<RestauranteInfos, string>({
      query: (id) => `/${id}`
    })
  })
})

export const { useGetCardapioQuery, useGetRestaurantesQuery } = api

export default api
