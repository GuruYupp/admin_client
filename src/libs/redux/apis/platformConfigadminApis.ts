import { createApi } from '@reduxjs/toolkit/query';
import dynamicBaseQuery from './dynamicBaseQuery';
import { getSessionId, getTenantCode } from '@/services/utils';
import { responseInterface } from '@/global.types';

interface searchBannerbodyInterface {
  id?: string;
  name?: string;
  networkId: string;
}
export const platformConfigadminApis = createApi({
  reducerPath: 'platformconfigapis',
  baseQuery: dynamicBaseQuery,
  endpoints: (builder) => ({
    searchBanner: builder.mutation<
      responseInterface,
      {
        params: { page: number; pagesize: number };
        body: searchBannerbodyInterface;
      }
    >({
      query: ({ params: { page = 0, pagesize = 50 }, body }) => ({
        headers: {
          'tenant-code': getTenantCode(),
          'session-id': getSessionId(),
        },
        url: `/service/admin/v1/search/banner?page=${page}&pagesize=${pagesize}`,
        method: 'POST',
        body,
      }),
    }),
  }),
});
