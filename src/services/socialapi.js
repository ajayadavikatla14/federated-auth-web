import API from "./API";

const GetGoogleApi = async()=>{
    try {
        const result=await API.get(`auth/google`);
        console.log(result.data);
        return result.data;
    } catch (error) {
        return {statusText : "could not connect to server..!!"}
    }
}


export {GetGoogleApi};