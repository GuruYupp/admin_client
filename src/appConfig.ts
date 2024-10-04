import herogotvConfigs from '@/configs/admin-clients/herogotv/Configs';
import timesplayConfigs from '@/configs/admin-clients/timesplay/Configs';
import yvsConfigs from '@/configs/admin-clients/yvs/Configs'
import { environmentTypes } from "./configs/configs.types";
import { AppConfigsObserver, AppConfigsSubject } from './global.types';
import { readFromLocalStorage } from './services/utils';



export class AppConfigs implements AppConfigsSubject{
    private config:{ [key: string]: any }={};
    private appConfigObservers:AppConfigsObserver[]=[];

    constructor(){
        const configs = this.getClientConfigs(process.env.NEXT_PUBLIC_TENANT,process.env.NEXT_PUBLIC_ENVIRONMENT);
        this.config = configs;
    }

    register(observer: AppConfigsObserver){
       this.appConfigObservers.push(observer);
       observer.update(this.config);
    }

    unregister(observer: AppConfigsObserver){
        this.appConfigObservers = this.appConfigObservers.filter(obsr=>obsr !== observer)
    };

    notifyObservers(){
        this.appConfigObservers.forEach((observer)=>{
            observer.update(this.config)
        })
    }

    updateConfigs(client:string){
        const newConfigs = this.getClientConfigs(client,process.env.NEXT_PUBLIC_ENVIRONMENT);
        this.config = newConfigs;
        this.notifyObservers();
    }

    get Config(){
        return this.config;
    }

    private getClientConfigs(tenant:string | undefined, environment:environmentTypes){
        let clientConfigs;
        switch (tenant) {
            case 'herogotv':
                clientConfigs = herogotvConfigs.get(environment || "beta");
              break;
           case 'timesplay':
            clientConfigs = timesplayConfigs.get(environment || "beta");
              break;
           default :
           clientConfigs = yvsConfigs.get(environment || "beta");
          }
        return clientConfigs;
    }

}

const appConfigsInstance = new AppConfigs();

export const setAppConfigsAfterRender = ()=>{
    const tenant = readFromLocalStorage("tenant")
    if(tenant){
        appConfigsInstance.updateConfigs(tenant);
    }
}

export {appConfigsInstance}
