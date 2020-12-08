import axios from 'axios';

export default class RestClientObj {
  static instanceAxios = axios.create({
    baseURL: 'http://localhost:5031'    
  });
  static setInterceptor =(callback) =>{
    RestClientObj.instanceAxios.interceptors.response.use(function (response) {
        return response;
      }, function (error) {
        if(error.response.status === 403) {
          callback();
          throw Error("Su sesión ha expirado");
        }else{
          throw Error(error.response.data.message);
        };
    });
  }

  static setTokenToAxio = (token) => {
    RestClientObj.instanceAxios.defaults.headers.common['Authorization'] = token;
  }
  static cleartokenAxio = () => {
    RestClientObj.instanceAxios.defaults.headers.common['Authorization'] = undefined;
  }


}
  