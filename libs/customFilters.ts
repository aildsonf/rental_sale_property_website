import _ from "lodash"
// local imports
import { IProperty } from "./customInterfaces"

export type Location = {
	lat: number
	lon: number
}

export function isCoordinateValid(obj: Location) {
	return obj.lat !== 0 && obj.lon !== 0
}

export function isUsableAreaPriceValid(usableAreas: number, price: string) {
	let pricePerSqrMt = Number(price) / usableAreas
	let priceLimit = Number("3500")

	return usableAreas > 0 && pricePerSqrMt > priceLimit
}

export function isInsideZapArea(obj: Location) {
	const box = {
		minlon: -46.693419,
		minlat: -23.568704,
		maxlon: -46.641146,
		maxlat: -23.546686,
	}
	const insideLat: boolean = obj.lat <= box.maxlat && obj.lat >= box.minlat ? true : false
	const insideLon: boolean = obj.lon <= box.maxlon && obj.lon >= box.minlon ? true : false

	return insideLat && insideLon
}

export function isMonthlyCondoFeeValid(condoFee: string, price: string) {
	if (Number(condoFee) !== NaN && Number(condoFee) !== 0) {
		return Number(condoFee) < Number(price) * 0.3
	}
}

export function minPriceSort(data: Array<IProperty>) {
	const sort = data.sort(function (a, b) {
		return Number(a.pricingInfos.price) - Number(b.pricingInfos.price)
	})
	return sort
}

export function maxPriceSort(data: Array<IProperty>) {
	const sort = data.sort(function (a, b) {
		return Number(b.pricingInfos.price) - Number(a.pricingInfos.price)
	})
	return sort
}

export const zapFilter = (data: Array<IProperty>) => {
	const sale: Array<IProperty> = []
	for (let obj of data) {
		if (isCoordinateValid(obj.address.geoLocation.location) && isUsableAreaPriceValid(obj.usableAreas, obj.pricingInfos.price)) {
			if (obj.pricingInfos.businessType === "SALE" && Number(obj.pricingInfos.price) >= 600000) {
				sale.push(obj)
			}
		}
	}

	const rent: Array<IProperty> = []
	for (let obj of data) {
		if (isCoordinateValid(obj.address.geoLocation.location)) {
			if (obj.pricingInfos.businessType === "RENTAL" && Number(obj.pricingInfos.price) >= 3500) {
				rent.push(obj)
			}
		}
	}
	return { sale, rent }
}

export const vivarealFilter = (data: Array<IProperty>) => {
	const sale: Array<IProperty> = []
	for (let obj of data) {
		if (isCoordinateValid(obj.address.geoLocation.location)) {
			if (obj.pricingInfos.businessType === "SALE" && Number(obj.pricingInfos.price) <= 700000) {
				sale.push(obj)
			}
		}
	}

	const rent: Array<IProperty> = []
	for (let obj of data) {
		if (isCoordinateValid(obj.address.geoLocation.location) && isMonthlyCondoFeeValid(obj.pricingInfos.monthlyCondoFee, obj.pricingInfos.price)) {
			if (obj.pricingInfos.businessType === "RENTAL" && Number(obj.pricingInfos.price) <= 4000) {
				rent.push(obj)
			}
		}
	}
	return { sale, rent }
}
