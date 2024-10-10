import { createApi } from '@reduxjs/toolkit/query/react';
import dynamicBaseQuery from './dynamicBaseQuery';

interface comonParamsInterface {
  page: number;
  pagesize: number;
}

export const adminApis = createApi({
  reducerPath: 'adminApis',
  baseQuery: dynamicBaseQuery,
  endpoints: (builder) => ({
    getChannels: builder.query<any, comonParamsInterface>({
      query: ({ page = 0, pagesize = 50 }) =>
        `/service/admin/v1/list/network?page=${page}&pagesize=${pagesize}`,
    }),
  }),
});

export const { getChannels } = adminApis.endpoints;
