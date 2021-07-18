import { useState } from "react"
import { GrNext, GrPrevious } from "react-icons/gr"

// local imports
import { IData, IProperty } from "../libs/customInterfaces"
import { nextPage, prevPage } from "../libs/pagination"
import styles from "../styles/Home.module.css"
import Offers from "./Offers"

type Props = {
	zap: IData
	vivaReal: IData
}

export default function Business({ zap, vivaReal }: Props) {
	const [sale, setSale] = useState<IProperty[]>([])
	const [rent, setRent] = useState<IProperty[]>([])
	const [salePageNumber, setSalePageNumber] = useState<number>(1)
	const [rentPageNumber, setRentPageNumber] = useState<number>(1)

	const handleClick = (data: IData) => {
		setSale(data.sale)
		setRent(data.rent)
		setSalePageNumber(1)
		setRentPageNumber(1)
		document.getElementById("display-offers")!.style.display = "grid"
	}

	return (
		<div className={styles.business}>
			<div className={styles.choices}>
				<button onClick={(e) => handleClick(zap)}>ZAP</button>
				<button onClick={(e) => handleClick(vivaReal)}>VivaReal</button>
			</div>

			<div id="display-offers" className={styles.displayOffers}>
				<section>
					<h3 className={styles.textColor}>Aqui são os que estão a venda:</h3>
					<span className={styles.filter}>
						<p className={styles.textColor}>Ordenar: </p>
						<a>menor preço</a>
						<a>maior preço</a>
					</span>

					<Offers data={sale} pageNumber={salePageNumber} />

					<div className={styles.paginate}>
						<button
							onClick={(e) => setSalePageNumber(prevPage(salePageNumber))}
						>
							<GrPrevious />
						</button>
						<p className={styles.textColor}>{salePageNumber}</p>
						<button
							onClick={(e) => setSalePageNumber(nextPage(sale, salePageNumber))}
						>
							<GrNext />
						</button>
					</div>
				</section>

				<section>
					<h3 className={styles.textColor}>E aqui os que estão para alugar:</h3>
					<span className={styles.filter}>
						<p className={styles.textColor}>Ordenar: </p>
						<a>menor preço</a>
						<a>maior preço</a>
					</span>

					<Offers data={rent} pageNumber={rentPageNumber} />

					<div className={styles.paginate}>
						<button
							onClick={(e) => setRentPageNumber(prevPage(rentPageNumber))}
						>
							<GrPrevious />
						</button>
						<p className={styles.textColor}>{rentPageNumber}</p>
						<button
							onClick={(e) => setRentPageNumber(nextPage(rent, rentPageNumber))}
						>
							<GrNext />
						</button>
					</div>
				</section>
			</div>
		</div>
	)
}
