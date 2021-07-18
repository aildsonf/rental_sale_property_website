// local imports
import { IProperty } from "./customInterfaces"

export function paginate(
	array: Array<IProperty>,
	pageNumber: number = 1,
	pageSize: number = 4
) {
	return array.slice(pageNumber * pageSize, pageNumber * pageSize + pageSize)
}

export function prevPage(pageNumber: number) {
	return pageNumber - 1 <= 0 ? 1 : pageNumber - 1
}

export function nextPage(data: Array<IProperty | any>, pageNumber: number) {
	let arraySize: number = data.length - 1
	let pageSize: number = 4 // elements per page
	let pageLimit: number = Math.floor(arraySize / pageSize) // pagination limit, max. page to be reached
	return pageNumber + 1 > pageLimit ? pageLimit : pageNumber + 1
}
