import Request from 'luch-request'
// import { globalData } from '@/api/config'
const request = new Request()

request.setConfig((config:any) => { /* 设置全局配置 */
  // config.baseURL = globalData.baseUrl
  config.timeout = 180000
  return config
})

request.interceptors.request.use((config: any) => { /* 请求之前拦截器 */
  if(config.method.toUpperCase() === 'POST' && uni.getStorageSync("openId")){
    config.data = Object.assign(config.data,{
      openId: uni.getStorageSync("openId")
    })
  }
  
  // 自定义参数: 是否显示加载框
  if (config.custom.loading !== false) {
    uni.showLoading({
      mask: true
    })
  }
  return config
}, (config:any) => {
  console.log('config', config)
  return Promise.reject(config)
})

/**
 * 自定义验证器，如果返回true 则进入响应拦截器的响应成功函数(resolve)，否则进入响应拦截器的响应错误函数(reject)
 * @param { Number } statusCode - 请求响应体statusCode（只读）
 * @return { Boolean } 如果为true,则 resolve, 否则 reject
 */

request.interceptors.response.use((response: AnyObject) => { /* 请求之后拦截器 */
  uni.hideLoading()
  console.log('response', response)
  // return response.data
  if (response?.data?.returnCode !== '00000') {
    console.log(response.data.returnMsg)
    uni.showToast({
      title: response.data.returnMsg,
      duration: 2500,
      icon: 'none'
    })
  }
  return response.data
}, (error:any) => { // 请求错误做点什么
  console.log('error', error)
  uni.hideLoading()
  return error
})

export {
  request
}
