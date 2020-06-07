import axios from 'axios';
const BaseURL='http://localhost:3001'

const postDataAxios=async(url,body,config={'content-type':"application/json;charset=utf-8"})=>{
  try {
    var response=await axios.post(`${BaseURL}/${url}`,body,config)
    console.log("response",response);
    
    var result=response.data
    console.log(result)
    return result
  } catch (error) {
    console.log(error)
  }
}

const getDataAxios=async(url,config={'content-type':"application/json;charset:utf-8"})=>{
  try {
    var response=await axios.get(`${url}`,config)
    var result=response.data
    return result
  } catch (error) {
    console.log(error)
  }
}

const  postDataAndImage=async(url,formData,config={headers:{'content-type':'multipart/form-data'}})=>{
  try{
   const response=await axios.post(`${BaseURL}/${url}`,formData,config)
    var result=response.data
    return(result)
  }catch(e)
  {
   return(false)
  }
}

export {BaseURL,postDataAxios,getDataAxios,postDataAndImage}