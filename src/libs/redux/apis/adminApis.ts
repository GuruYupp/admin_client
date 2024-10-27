import { createApi } from '@reduxjs/toolkit/query/react';
import dynamicBaseQuery from './dynamicBaseQuery';
import { getSessionId, getTenantCode } from '@/services/utils';
import { responseInterface } from '@/global.types';

interface comonParamsInterface {
  page: number;
  pagesize: number;
}

export const adminApis = createApi({
  reducerPath: 'adminApis',
  baseQuery: dynamicBaseQuery,
  endpoints: (builder) => ({
    getChannels: builder.query<responseInterface, comonParamsInterface>({
      query: ({ page = 0, pagesize = 50 }) => ({
        headers: {
          'tenant-code': getTenantCode(),
          'session-id': getSessionId(),
        },
        url: `/service/admin/v1/list/network?page=${page}&pagesize=${pagesize}`,
      }),
    }),
    getResourceProfiles: builder.query<responseInterface, unknown>({
      query: () => ({
        headers: {
          'tenant-code': getTenantCode(),
          'session-id': getSessionId(),
        },
        url: `/service/admin/v1/resource/profile/list`,
      }),
    }),
  }),
});

export const { getChannels } = adminApis.endpoints;
