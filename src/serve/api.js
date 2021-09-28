import request from "./request.js";


//请求天气
export function getWeather(params) {
	return request({
		url: `/he/freeweather?city=${params.city}&appkey=${params.appkey}`,
		method: 'GET',
	})
}

//模拟mock数据
export function fetchData() {
	return request({
		url: `/api/xxl/mock`,
		method: 'GET',
	})
}