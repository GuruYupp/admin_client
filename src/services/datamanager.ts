import { appConfigsInstance } from '@/appConfig';
import { loginresponseInterface } from '@/global.types';
import { axiosAPIS } from '@/libs/axios/axios';

export async function getData(
  url: string,
  params: unknown = {},
  signal?: AbortSignal,
) {
  const headers = {};
  const data = await axiosAPIS.get({
    url,
    headers,
    params,
    signal,
  });
  return data;
}

export async function postData<T>(url: string, PostData: T) {
  const headers = {};
  const data = axiosAPIS.post({ url, headers }, PostData);
  return data;
}

export async function postFormData<T>(url: string, PostData: T) {
  const headers = {};
  const data = await axiosAPIS.post({ url, headers }, PostData);
  return data;
}

export async function makeLogin<T>(url: string, PostData: T) {
  const headers = {
    'tenant-code': appConfigsInstance.Config.tenant,
  };
  const data: loginresponseInterface = await axiosAPIS.post(
    { url, headers },
    PostData,
  );
  return data;
}
