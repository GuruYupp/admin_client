import { FC } from "react"
import { ImDatabase, ImUsers } from 'react-icons/im';
import { TfiFiles } from 'react-icons/tfi';
import { BsGraphUpArrow } from 'react-icons/bs';
import { IoSettingsSharp } from '@react-icons/all-files/io5/IoSettingsSharp';
import { PortalIconPropsInterface } from "../../dashboardmenu.types"

const PortalIcon:FC<PortalIconPropsInterface> = ({portal}) => {
    switch(portal){
        case 'content':
            return <ImDatabase/>
        case 'subscriber':
            return <ImUsers/>
        case 'reports':
            return <TfiFiles/>
        case 'analytics':
            return <BsGraphUpArrow/>
        case 'site_config':
            return <IoSettingsSharp/>
        default:
            return <></>
    }
}

export default PortalIcon