const Mock = require('mockjs')
const Random = Mock.Random



const getName = () => {
	let data = []

	data.push({
		"account": "101"
	})
	return data
}

Mock.mock('http://localhost:8080/getResource/getData', 'get', getName())