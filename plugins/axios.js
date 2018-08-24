//import Vue from 'vue'
import axios from 'axios'
import {
  LoadingBar,Message
} from 'iview';

//Vue.prototype.$http = axios;
//axios 配置
axios.defaults.timeout = 5000

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  LoadingBar.start()
  return config;
}, function (error) {
  // 对请求错误做些什么
  LoadingBar.finish();
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  LoadingBar.finish();
  console.log(response);
 if(response.data.code==='200')
 {
     Message.success(response.data.message);
     return response.data
 }
 else
 {
    Message.error(response.data.message);
     return Promise.reject(response.data.message);
 }
}, function (error) {
  LoadingBar.finish();
  // 对响应错误做点什么
  return Promise.reject(error);
});

let http = {
  get: (url, params={}, isToken) => {
    // console.log(sessionStorage.getItem("USER_TOKEN"));
    return new Promise((resolve, reject) => {
      axios.get(url, {
          //auth:sessionStorage.getItem("USER_TOKEN"),
          params: Object.assign(params, {
            tocken: isToken ? sessionStorage.getItem("USER_TOKEN") : ""
          }) //params
        })
        .then(res => {
          if (res.code == '200')
            resolve(res)
          else reject();
        })
        .catch(error => {
          reject(error);
        })
    });
  },
  post: (url, params, isToken) => {
    return new Promise((resolve, reject) => {
      axios.post(url, params, {
          params: {
            tocken: sessionStorage.getItem("USER_TOKEN")
          }
        })
        .then(res => {
          if (res.code == '200')
            resolve(res)
          else reject(res.message);
        })
        .catch(error => {
          reject(error);
        });
    })
  }
}
export default http
