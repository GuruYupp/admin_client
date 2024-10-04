import  { appConfigsInstance } from "@/appConfig";
import { BaseQueryFn, FetchArgs, FetchBaseQueryError, fetchBaseQuery } from "@reduxjs/toolkit/query";

const dynamicBaseQuery:BaseQueryFn<string | FetchArgs,unknown,FetchBaseQueryError> = async (args,api,extraOptions)=>{
  // console.log(args)
//   const urlEnd = typeof args === 'string' ? args : args.url
//   // construct a dynamically generated portion of the url
// //   const adjustedUrl = `project/${projectId}/${urlEnd}`
// const adjustedUrl = urlEnd
// console.log(adjustedUrl)
//   const adjustedArgs =
//     typeof args === 'string' ? adjustedUrl : { ...args, url: adjustedUrl }
  // provide the amended url and other params to the raw base query
  return fetchBaseQuery({ baseUrl: appConfigsInstance.Config.baseURL })(args, api, extraOptions)
}

export default dynamicBaseQuery