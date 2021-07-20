import Image from "next/image"
import { useState } from "react"
// local imports
import { IProperty } from "../libs/customInterfaces"
import formatCurrency from "../libs/formatCurrency"
import ProductInfo from "./Modal"
// css
import styles from "../styles/Home.module.css"

type Props = {
	property: IProperty
}

export default function Card({ property }: Props) {
	const [details, setDetails] = useState<IProperty>()
	const [modal, setModal] = useState<boolean>(false)

	const handleModalUp = (property: IProperty) => {
		setDetails(property)
		setModal(true)
	}

	return (
		<div id="card" className={styles.card}>
			<Image src={property.images[0]} alt="Foto do imóvel" width={256} height={200} layout="fixed" objectFit="cover" />
			<div className={styles.info}>
				<b>{formatCurrency(property.pricingInfos.price)}</b>
				<span>{`${property.address.neighborhood}, ${property.address.city}`}</span>
				<span>{`${property.bedrooms} quarto(s) | ${property.bathrooms} banheiro(s)`}</span>
				<span>{`${property.usableAreas}m²`}</span>
				<button id="display-info" onClick={(e) => handleModalUp(property)}>
					Ver Mais
				</button>
			</div>

			{modal && <ProductInfo details={details!} showModal={setModal} />}
		</div>
	)
}
