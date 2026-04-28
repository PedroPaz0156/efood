import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type DeliveryInfo = {
  products: [
    {
      id: number
      price: number
    }
  ]
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: number
      complement: string
    }
    payment: {
      card: {
        name: string
        number: string
        code: number
        expires: {
          month: number
          year: number
        }
      }
    }
  }
}

type PurchaseResponse = {
  orderId: string
}

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
    }),
    purchase: builder.mutation<PurchaseResponse, DeliveryInfo>({
      query: (body) => ({
        url: '/checkout',
        method: 'POST',
        body
      })
    })
  })
})

export const {
  useGetCardapioQuery,
  useGetRestaurantesQuery,
  usePurchaseMutation
} = api

export default api
