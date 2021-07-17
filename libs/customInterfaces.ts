export interface IProperty {
	usableAreas: number
	listingType: string
	createdAt: string
	listingStatus: string
	id: string
	parkingSpaces: number
	updatedAt: string
	owner: boolean
	images: string[]
	address: {
		city: string
		neighborhood: string
		geoLocation: {
			precision: string
			location: {
				lon: number
				lat: number
			}
		}
	}
	bathrooms: number
	bedrooms: number
	pricingInfos: {
		period: string
		yearlyIptu: string
		price: string
		rentalTotalPrice: string
		businessType: string
		monthlyCondoFee: string
	}
}

export interface IData {
	sale: Array<IProperty>
	rent: Array<IProperty>
}
