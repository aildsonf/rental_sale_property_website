import { useState } from "react"

// local imports
import { IData, IProperty } from "../libs/customInterfaces"
import styles from "../styles/Home.module.css"
import Offers from "./Offers"

export interface Props {
	zap: IData
	vivaReal: IData
}

export default function Business({ zap, vivaReal }: Props) {
	const [sale, setSale] = useState<IProperty[]>([])
	const [rent, setRent] = useState<IProperty[]>([])

	const handleClick = (data: IData) => {
		setSale(data.sale)
		setRent(data.rent)
	}

	return (
		<div className={styles.business}>
			<div className={styles.choices}>
				<button onClick={(e) => handleClick(zap)}>ZAP</button>
				<button onClick={(e) => handleClick(vivaReal)}>VivaReal</button>
			</div>

			<section>
				<h3 className={styles.textColor}>Aqui são os que estão a venda:</h3>
				<Offers data={sale} />
			</section>

			<section>
				<h3 className={styles.textColor}>E aqui os que estão para alugar:</h3>
				<Offers data={rent} />
			</section>
		</div>
	)
}
