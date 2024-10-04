
import { ConfigInterface } from "@/configs/configs.types";
import betaConfig  from "./betaConfig";
import prodConfig from "./prodConfig";


const Configs:ConfigInterface={

    get:(env)=>{
        if(env==="beta"){
            return betaConfig
        }
        return prodConfig
    }
}

Configs.get = Configs.get.bind(Configs)

export default Configs;