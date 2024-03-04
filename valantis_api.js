import CryptoJS from 'crypto-js';
import fetch from 'node-fetch';

const date = new Date();
const UTCDate = date.toISOString().slice(0, 10).replace(/-/g, '');
const auth_key = `Valantis_${UTCDate}`;
const hashed_auth_key = CryptoJS.MD5(auth_key).toString();

// Формируем заголовок запроса с авторизационной строкой и остальным
const headers = {
	'X-Auth': hashed_auth_key,
	'Content-Type': 'application/json',
	Accept: 'application/json;odata=verbose;',
};

// Тело запроса
const body = {
	action: 'filter',
	params: { price: 17500.0 },
};

// Отправляем запрос на сервер
fetch('https://api.valantis.store:41000/', {
	method: 'POST',
	headers: headers,
	body: JSON.stringify(body),
})
	.then((response) => {
		if (!response.ok) {
			console.error(
				'Ошибка при выполнении запроса. Код ответа: ' + response.status
			);
			return;
		}

		console.log('Запрос выполнен успешно!');
		return response.json();
	})
	.then((data) => console.log(data))
	.catch(function (error) {
		console.error('Ошибка при выполнении запроса:', error);
	});
