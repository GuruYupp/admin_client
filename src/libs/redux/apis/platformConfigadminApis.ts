import { createApi } from '@reduxjs/toolkit/query';
import dynamicBaseQuery from './dynamicBaseQuery';
import { getSessionId, getTenantCode } from '@/services/utils';
import { responseInterface } from '@/global.types';
import {
  VodCategoriesparamsInterface,
  searchBannerparamsInterface,
  searchBannerbodyInterface,
  listGenreparamsInterface,
  GeoRuleparamsInterface,
} from './apis';

export const platformConfigadminApis = createApi({
  reducerPath: 'platformconfigapis',
  baseQuery: dynamicBaseQuery,
  endpoints: (builder) => ({
    searchBanner: builder.mutation<
      responseInterface,
      {
        params: searchBannerparamsInterface;
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
    listGenre: builder.query<responseInterface, listGenreparamsInterface>({
      query: ({ page = 0, pagesize = 50 }) => ({
        headers: {
          'tenant-code': getTenantCode(),
          'session-id': getSessionId(),
        },
        url: `/service/admin/v1/list/genre?page=${page}&pagesize=${pagesize}`,
        method: 'GET',
      }),
    }),
    listvodCategories: builder.query<
      responseInterface,
      VodCategoriesparamsInterface
    >({
      query: ({ page = 0, pagesize = 200 }) => ({
        headers: {
          'tenant-code': getTenantCode(),
          'session-id': getSessionId(),
        },
        url: `/service/admin/v1/list/category?page=${page}&pagesize=${pagesize}`,
        method: 'GET',
      }),
    }),
    listGeoRules: builder.query<responseInterface, GeoRuleparamsInterface>({
      query: ({ page = 0, pagesize = 200 }) => ({
        headers: {
          'tenant-code': getTenantCode(),
          'session-id': getSessionId(),
        },
        url: `/service/admin/v1/list/geo_rule?page=${page}&pagesize=${pagesize}`,
        method: 'GET',
      }),
    }),
  }),
});
