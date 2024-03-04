import CryptoJS from 'crypto-js';

const date = new Date();
// Берем текущую дату UTC (год, месяц, день) без знака "-"
const UTCDate = date.toISOString().slice(0, 10).replace(/-/g, '');
// Пароль апи
const auth_key = `Valantis_${UTCDate}`;
// Делаем MD5 хеширование
export const hashed_auth_key = CryptoJS.MD5(auth_key).toString();
// URL адрес апишки
export const API_URL = 'https://api.valantis.store:41000/';

// Формируем заголовок запроса с авторизационной строкой и остальным
export const APIHeaders = {
	'X-Auth': hashed_auth_key,
	'Content-Type': 'application/json',
	Accept: 'application/json;odata=verbose;',
};

console.log(hashed_auth_key);

export interface IAPIBody {
	action: string;
	params: object;
}
