import React, { useState } from "react"
// local imports
import { IData, IProperty } from "../libs/customInterfaces"
import Pagination from "./Pagination"
import SortOptions from "./SortOptions"
import Offers from "./Offers"
// css
import styles from "../styles/Home.module.css"

type Props = {
	zap: IData
	vivaReal: IData
}

export default function Business({ zap, vivaReal }: Props) {
	const [sale, setSale] = useState<IProperty[]>([])
	const [rent, setRent] = useState<IProperty[]>([])
	const [salePageNumber, setSalePageNumber] = useState<number>(1)
	const [rentPageNumber, setRentPageNumber] = useState<number>(1)
	const [key, setKey] = useState<number>(Date.now()) // "forceUpdate" alternate
	const [offers, setOffers] = useState<boolean>(false)

	const handlePageReset = () => {
		setSalePageNumber(1)
		setRentPageNumber(1)
	}

	const handleDataChange = (data: IData) => {
		setSale(data.sale)
		setRent(data.rent)
	}

	const handleClick = (data: IData) => {
		handleDataChange(data)
		handlePageReset()
		setOffers(true)
	}

	return (
		<div className={styles.business}>
			<div id="providers" className={styles.choices}>
				<a id="zapOffers" href="#display-offers" onClick={(e) => handleClick(zap)}>
					ZAP
				</a>
				<a id="vivarealOffers" href="#display-offers" onClick={(e) => handleClick(vivaReal)}>
					VivaReal
				</a>
			</div>

			{offers && (
				<div id="display-offers">
					<section>
						<h3>Aqui são os que estão a venda:</h3>
						<SortOptions data={sale} updateData={setSale} forceRender={setKey} resetPage={setSalePageNumber} />

						<Pagination updatePage={setSalePageNumber} currentPage={salePageNumber} dataLength={sale.length} />
						<Offers key={key} data={sale || []} pageNumber={salePageNumber || 1} />
						<Pagination updatePage={setSalePageNumber} currentPage={salePageNumber} dataLength={sale.length} />
					</section>

					<section>
						<h3>E aqui os que estão para alugar:</h3>
						<SortOptions data={rent} updateData={setRent} forceRender={setKey} resetPage={setRentPageNumber} />

						<Pagination updatePage={setRentPageNumber} currentPage={rentPageNumber} dataLength={rent.length} />
						<Offers key={key} data={rent || []} pageNumber={rentPageNumber || 1} />
						<Pagination updatePage={setRentPageNumber} currentPage={rentPageNumber} dataLength={rent.length} />
					</section>
				</div>
			)}
		</div>
	)
}
