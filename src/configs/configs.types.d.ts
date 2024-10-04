import { validClientType } from "@/global.types";

export type environmentTypes = "beta" | "prod"  | string | undefined

export interface AdminConfigsInterface{
    config: { [key: string]: any }; // Define your config type here
    init: (tenant: string | validClientType | undefined,environment:environmentTypes) => void;
    reset: () => void;
}


export interface ConfigInterface{
    get: (env:"beta" | "prod" | string | undefined) => { [key: string]: any };
}
