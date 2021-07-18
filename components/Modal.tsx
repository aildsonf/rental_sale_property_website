import _ from "lodash"
import { IProperty } from "../libs/customInterfaces"
import formatCurrency from "../libs/formatCurrency"
import styles from "../styles/Home.module.css"
import Carousel from "./Carousel"
import dynamic from "next/dynamic"

const Maps = dynamic(() => import("./Maps"), { ssr: false })

type Props = {
	data: IProperty
}

export default function ProductInfo({ data }: Props) {
	const handleClick = () => {
		document.getElementById("product-info")!.style.display = "none"
	}

	return (
		<div id="product-info" className={styles.modal}>
			<section className={styles.modalTitle}>
				<b>Detalhes</b>
				<button onClick={handleClick}>&#9932;</button>
			</section>

			<div className={styles.modalContainer}>
				<section className={styles.productSpecs}>
					<span>
						<b>Tipo: </b>Teste
					</span>
					<span>
						<b>Endereço: </b>
						{`${data.address.neighborhood}, ${data.address.city}`}
					</span>
					<div>
						<p>{`${data.usableAreas}m²`}</p>
						<p>{`${data.bedrooms} quarto(s)`}</p>
						<p>{`${data.bathrooms} banheiro(s)`}</p>
					</div>
					<span>
						<b>Valor: </b>
						{formatCurrency(data.pricingInfos.price)}
					</span>
				</section>

				<div className={styles.productIllustration}>
					<section className={styles.productImages}>
						<Carousel images={data.images} />
					</section>
					<section className={styles.productLocation}>
						<Maps />
					</section>
				</div>
			</div>
		</div>
	)
}
