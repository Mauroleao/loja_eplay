// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { createApi } from '@reduxjs/toolkit/query/react'

type Product = {
  id: number
  price: number
}

type PurchasePayload = {
  products: Product[]
  billing: {
    name: string
    email: string
    document: string
  }
  delivery: {
    email: string
  }
  payment: {
    card: {
      active: boolean
      owner?: {
        name: string
        document: string
      }
      name?: string
      number?: string
      expires?: {
        month: number
        year: number
      }
      code?: number
    }
    installments: number
  }
}

type PurchaseResponse = {
  orderId: string
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const customFetchBase = async (url: string, options: any = {}) => {
  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers
      }
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    return { data: await response.json() }
  } catch (error) {
    return { error: { status: 'FETCH_ERROR', error: String(error) } }
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const api: any = createApi({
  baseQuery: async (args) => {
    const baseUrl = 'https://api-ebac.vercel.app/api/eplay'
    let url: string
    if (typeof args === 'string') {
      url = `${baseUrl}/${args}`
    } else {
      url = `${baseUrl}/${args.url}`
    }

    return customFetchBase(url, typeof args === 'object' ? args : {})
  },
  endpoints: (builder: any) => ({
    getFeaturedGame: builder.query<Game, void>({
      query: () => 'destaque'
    }),
    getOnSale: builder.query<Game[], void>({
      query: () => 'promocoes'
    }),
    getSoon: builder.query<Game[], void>({
      query: () => 'em-breve'
    }),
    getActionGames: builder.query<Game[], void>({
      query: () => 'acao'
    }),
    getSportGames: builder.query<Game[], void>({
      query: () => 'esportes'
    }),
    getSimulationGames: builder.query<Game[], void>({
      query: () => 'simulacao'
    }),
    getFightGames: builder.query<Game[], void>({
      query: () => 'luta'
    }),
    getRpgGames: builder.query<Game[], void>({
      query: () => 'rpg'
    }),
    getGame: builder.query<Game, string>({
      query: (id: string) => `jogos/${id}`
    }),
    purchase: builder.mutation<PurchaseResponse, PurchasePayload>({
      query: (body: PurchasePayload) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
})

export const {
  useGetFeaturedGameQuery,
  useGetOnSaleQuery,
  useGetSoonQuery,
  useGetActionGamesQuery,
  useGetSportGamesQuery,
  useGetSimulationGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery,
  useGetGameQuery,
  usePurchaseMutation
} = api

export default api
