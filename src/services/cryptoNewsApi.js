import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
console.log(process.env.RAPIDAPI_KEY)
const cryptoNewsHeaders = {
  'x-bingapis-sdk': 'true',
  'x-rapidapi-key': '447c540612mshd87ea78b3139413p18f2ffjsnc695369991f9',
  'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
}

const baseUrl = 'https://bing-news-search1.p.rapidapi.com'

const createRequest = (url) => ({
  url,
  headers: cryptoNewsHeaders,
})

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) =>
        createRequest(
          `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
        ),
    }),
  }),
})

export const { useGetCryptoNewsQuery } = cryptoNewsApi
