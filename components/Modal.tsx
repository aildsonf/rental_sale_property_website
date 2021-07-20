import _ from "lodash"
import { BiBath, BiBed, BiRuler } from "react-icons/bi"
// local imports
import { IProperty } from "../libs/customInterfaces"
import formatCurrency from "../libs/formatCurrency"
import Carousel from "./Carousel"
// css
import styles from "../styles/Home.module.css"
import { useState } from "react"
import { useEffect } from "react"
import { isInsideZapArea } from "../libs/customFilters"

type Props = {
	details: IProperty
	showModal: Function
}

export default function ProductInfo({ details, showModal }: Props) {
	const [businessType, setBusinessType] = useState<string>("")
	const [zapArea, setZapArea] = useState<boolean>(false)

	const handleClick = () => {
		showModal(false)
	}

	useEffect(() => {
		details.pricingInfos.businessType === "SALE" && setBusinessType("Venda")
		details.pricingInfos.businessType === "RENTAL" && setBusinessType("Aluguel")
		isInsideZapArea(details.address.geoLocation.location) && setZapArea(true)
	}, [details.address.geoLocation.location, details.pricingInfos.businessType])

	return (
		<div className={styles.modal}>
			<section className={styles.modalTitle}>
				<b>Detalhes</b>
				<button onClick={handleClick}>&#9932;</button>
			</section>

			<section>
				<div className={styles.propertyView}>
					<Carousel images={details.images} />

					<div className={styles.iconsWrapper}>
						<span className={styles.areaIcons}>
							<BiRuler />
							{`${details.usableAreas}m²`}
						</span>
						<span className={styles.areaIcons}>
							<BiBed />
							{details.bedrooms}
						</span>
						<span className={styles.areaIcons}>
							<BiBath />
							{details.bathrooms}
						</span>
					</div>
				</div>

				<div className={styles.propertySpecs}>
					<span>
						<b>Tipo de Negócio: </b>
						{businessType}
					</span>
					<span>
						<b>Endereço: </b>
						{`${details.address.neighborhood}, ${details.address.city}`}
					</span>
					<span>
						<b>IPTU: </b>
						{formatCurrency(details.pricingInfos?.yearlyIptu)}
					</span>
					<span>
						<b>Condomínio: </b>
						{formatCurrency(details.pricingInfos?.monthlyCondoFee)}
					</span>
				</div>
			</section>

			<section>
				{zapArea && <span>Imóvel dentro da área ZAP &#128516;</span>}
				<b>{formatCurrency(details.pricingInfos.price)}</b>
			</section>
		</div>
	)
}
