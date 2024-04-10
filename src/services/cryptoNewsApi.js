import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const cryptoNewsHeaders = {
    
    'X-RapidAPI-Key': 'b35290fe40msh5bef31d6caacac6p13535bjsn152c8032117e',
    'X-RapidAPI-Host': 'cryptocurrency-news2.p.rapidapi.com'
      
}

const baseUrl = 'https://cryptocurrency-news2.p.rapidapi.com/v1'

const createRequest = (url) => ({url, headers: cryptoNewsHeaders})

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder)=> ({
        getCryptoNews: builder.query({
            query: ()=> createRequest('/coindesk')
        })
    })
});

export const {useGetCryptoNewsQuery} = cryptoNewsApi;