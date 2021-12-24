import * as CryptoJS from 'crypto-js';

export class Security {

	encryptSecretKey = "CarIKDFglG7qAZyv9W2tLgUOAKHFBGikZchEager"

	encryptData(data) {
		try {
			return CryptoJS.AES.encrypt(JSON.stringify(data), this.encryptSecretKey).toString();
		} catch (e) {
			return ''
			console.log(e)
		}
	}

	decryptData(data) {
		try {
			const bytes = CryptoJS.AES.decrypt(data, this.encryptSecretKey)
			if (bytes.toString()) {
				return JSON.parse(bytes.toString(CryptoJS.enc.Utf8))
			}
			return data
		} catch (e) {
			return ''
			console.log(e)
		}
	}
}
