export function isObjEmpty(obj: object) {
	const res = Object.keys(obj).length === 0;
	return res;
}

export function isObjValsEmpty(obj: object) {
	const res = Object.keys(obj).length === 0;
	return res;
}

export function getOffset(page: number, limit: number) {
	return (page - 1) * limit;
}
