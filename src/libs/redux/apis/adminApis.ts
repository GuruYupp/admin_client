import { createApi } from '@reduxjs/toolkit/query/react';
import dynamicBaseQuery from './dynamicBaseQuery';

export const adminApis = createApi({
  reducerPath: 'adminApis',
  baseQuery:dynamicBaseQuery,
  endpoints: (builder) => ({
    getPokemonByName: builder.query<any, string>({
      query: (name:string) => `pokemon/${name}`,
    }),
  }),
});

export const {  } = adminApis.endpoints;
export const {useGetPokemonByNameQuery} = adminApis
