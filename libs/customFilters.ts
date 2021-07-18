import _ from "lodash"

// local imports
import { IProperty } from "./customInterfaces"

export type Location = {
	lat: number
	lon: number
}

export function isCoordinateNull(obj: Location) {
	return obj.lat === 0 && obj.lon === 0 ? true : false
}

export function isMonthlyCondoFeeNull(value: string) {
	return Number(value) === NaN || Number(value) === 0 ? true : false
}

export function isInsideZapArea(obj: Location) {
	const box = {
		minlon: -46.693419,
		minlat: -23.568704,
		maxlon: -46.641146,
		maxlat: -23.546686,
	}
	const insideLat: boolean =
		obj.lat <= box.maxlat && obj.lat >= box.minlat ? true : false
	const insideLon: boolean =
		obj.lon <= box.maxlon && obj.lon >= box.minlon ? true : false

	return insideLat && insideLon ? true : false
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

export const filterZap = (data: Array<IProperty>) => {
	const sale: Array<IProperty> = []
	for (let obj of data) {
		if (
			!isCoordinateNull(obj.address.geoLocation.location) &&
			obj.usableAreas > 0
		) {
			if (
				obj.pricingInfos.businessType === "SALE" &&
				Number(obj.pricingInfos.price) >= 600000
			) {
				sale.push(obj)
			}
		}
	}

	const rent: Array<IProperty> = []
	for (let obj of data) {
		if (!isCoordinateNull(obj.address.geoLocation.location)) {
			if (
				obj.pricingInfos.businessType === "RENTAL" &&
				Number(obj.pricingInfos.price) >= 3500
			) {
				rent.push(obj)
			}
		}
	}

	return { sale, rent }
}

export const filterVivaReal = (data: Array<IProperty>) => {
	const sale: Array<IProperty> = []
	for (let obj of data) {
		if (!isCoordinateNull(obj.address.geoLocation.location)) {
			if (
				obj.pricingInfos.businessType === "SALE" &&
				Number(obj.pricingInfos.price) <= 700000
			) {
				sale.push(obj)
			}
		}
	}

	const rent: Array<IProperty> = []
	for (let obj of data) {
		if (
			!isCoordinateNull(obj.address.geoLocation.location) &&
			!isMonthlyCondoFeeNull(obj.pricingInfos.monthlyCondoFee)
		) {
			if (
				obj.pricingInfos.businessType === "RENTAL" &&
				Number(obj.pricingInfos.price) <= 4000
			) {
				rent.push(obj)
			}
		}
	}

	return { sale, rent }
}
