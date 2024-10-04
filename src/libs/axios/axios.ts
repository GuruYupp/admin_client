import axios, { AxiosResponse } from 'axios';
import { AppConfigs,appConfigsInstance } from '@/appConfig';
import { AppConfigsObserver } from '@/global.types';

interface dynamicobject {
  [key: string]: string | number | boolean;
}

interface axiosgetparams {
  url: string;
  params?: dynamicobject | unknown;
  headers?: dynamicobject;
  signal?: AbortSignal;
}

class axiosInstanceSerive implements AppConfigsObserver {
  protected appConfigsInstance!: AppConfigs;
  protected configs: { [key: string]: any } = {};
  protected AxiosInstance = axios.create();

  constructor(appConfig:AppConfigs) {
    this.appConfigsInstance = appConfig;
    this.configs = this.appConfigsInstance.Config
    console.log(this.configs)
    this.AxiosInstance.defaults.baseURL = this.configs.api
    this.appConfigsInstance.register(this);
  }

  update(configs: { [key: string]: any }) {
    this.configs = configs;
    this.AxiosInstance.defaults.baseURL = configs.api;
  }

  unregister() {
    this.appConfigsInstance.unregister(this);
  }
}

class AxiosAPIService extends axiosInstanceSerive {
  constructor() {
    super(appConfigsInstance);
  }

  async get(config: axiosgetparams) {
    const response: AxiosResponse = await this.AxiosInstance.get(config.url, {
      headers: config.headers,
      params: config.params,
      signal: config.signal,
    });
    return response.data;
  }

  async post(config: axiosgetparams, payload: unknown) {
    const response: AxiosResponse = await this.AxiosInstance.post(
      config.url,
      payload,
      {
        headers: config.headers,
        params: config.params,
      },
    );
    const data = response.data;
    return data;
  }
}

export const axiosAPIS = new AxiosAPIService();
