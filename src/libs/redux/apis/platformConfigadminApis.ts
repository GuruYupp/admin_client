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
  PlatformLanguagesparamsInterface,
  DisplayLanguagesparamsInterface,
  LocalizationparamsInterface,
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
    listPlatformLanguages: builder.query<
      responseInterface,
      PlatformLanguagesparamsInterface
    >({
      query: ({ page = 0, pagesize = 200 }) => ({
        headers: {
          'tenant-code': getTenantCode(),
          'session-id': getSessionId(),
        },
        url: `/service/admin/v1/list/language?page=${page}&pagesize=${pagesize}`,
        method: 'GET',
      }),
    }),
    listDisplayLanguages: builder.query<
      responseInterface,
      DisplayLanguagesparamsInterface
    >({
      query: ({ page = 0, pagesize = 200 }) => ({
        headers: {
          'tenant-code': getTenantCode(),
          'session-id': getSessionId(),
        },
        url: `/service/admin/v1/list/display_language??page=${page}&pagesize=${pagesize}`,
        method: 'GET',
      }),
    }),
    listLocalization: builder.query<
      responseInterface,
      LocalizationparamsInterface
    >({
      query: ({ page = 0, pagesize = 200 }) => ({
        headers: {
          'tenant-code': getTenantCode(),
          'session-id': getSessionId(),
        },
        url: `/service/admin/v1/localization/resource/list?page=${page}&pagesize=${pagesize}`,
        method: 'GET',
      }),
    }),
    LocalizationDisplayLangs: builder.query<
      responseInterface,
      LocalizationparamsInterface
    >({
      query: ({ page = 0, pagesize = 200 }) => ({
        headers: {
          'tenant-code': getTenantCode(),
          'session-id': getSessionId(),
        },
        url: `/service/admin/v1/list/display_language?page=${page}&pagesize=${pagesize}`,
        method: 'GET',
      }),
    }),
  }),
});
