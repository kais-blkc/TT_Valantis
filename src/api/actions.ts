import { APIHeaders, API_URL, IAPIBody } from '@/consts/api';

export const apiFetch = async (body: IAPIBody) => {
	const res = await fetch(API_URL, {
		method: 'POST',
		headers: APIHeaders,
		body: JSON.stringify(body),
	});

	if (!res.ok) {
		const errText = 'Ошибка при выполнении запроса. Код ответа: ' + res.status;

		console.error(errText);
		throw new Error(errText);
	}

	const data = await res.json();
	return data;
};
