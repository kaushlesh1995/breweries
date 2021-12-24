import { Injectable } from '@angular/core';


@Injectable()
export class Environment {

	constructor(
	) { }

   // ng b --prod --aot=false --build-optimizer=false
   baseURL: string = 'https://api.openbrewerydb.org'
	// Knowlarity api url
	// getAgents: string = 'https://kpi.knowlarity.com/Basic/v1/account/agent'
	// makeCall: string = 'https://kpi.knowlarity.com/Basic/v1/account/call/makecall'
	// callRecordings: string = 'https://kpi.knowlarity.com/Basic/v1/account/calllog'
	// Knowlarity Headers
	// knowlarityHeaders = {
	// 	"Authorization": "f5347744-e6a2-4a86-94cf-096eba3af370",
	// 	"x-api-key": "ysynEyRyeu6OZtWFMZTwV60L6EZsCsfXa5UNEW4g",
	// 	"Content-Type": "application/json",
	// 	"Accept": "application/json"
	// }

	// MessageBird Headers
	// messageBirdHeaders = {
	// 	"Content-Type": "application/json",
	// 	"Authorization": "AccessKey l7iGIM4xsgZlf17ShuPzHEhHo",
	// 	"Accept-Encoding": "gzip, deflate, br"
	// }

	//Headers

	// public business = this._security.decryptData(localStorage.getItem('business'))

	// headers = {
	// 	'business': this.business.business,
	// 	'tz': Intl.DateTimeFormat().resolvedOptions().timeZone,
	// 	'x-access-token': this.business.token,
	// 	'content-type': "application/json",
	// 	'deviceid': localStorage.getItem('deviceid'),
	// 	'devicetype': localStorage.getItem('devicetype')
	// }

	// multipartHeaders = {
	// 	'business': this.business.business,
	// 	'tz': Intl.DateTimeFormat().resolvedOptions().timeZone,
	// 	'x-access-token': this.business.token,
	// 	'Accept': "multipart/form-data",
	// 	'deviceid': localStorage.getItem('deviceid'),
	// 	'devicetype': localStorage.getItem('devicetype')
	// }

	// globalHeaders = {
	// 	'tz': Intl.DateTimeFormat().resolvedOptions().timeZone,
	// 	'content-type': "application/json",
	// 	'deviceid': localStorage.getItem('deviceid'),
	// 	'devicetype': localStorage.getItem('devicetype')
	// }

}