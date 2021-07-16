import Image from "next/image"
import { IProperty } from "../libs/propertyInterface"
import styles from "../styles/Home.module.css"
import { GrNext, GrPrevious } from "react-icons/gr"
import { useState } from "react"

export interface Props {
	data: Array<IProperty>
}

export default function Offers({ data }: Props) {
	const currencyFormat = new Intl.NumberFormat("pt-BR", {
		style: "currency",
		currency: "BRL",
	})
	const [pageNumber, setPageNumber] = useState<number>(1)

	const paginate = (
		array: Array<IProperty>,
		page_number: number = pageNumber,
		page_size: number = 4
	) => {
		return array.slice(
			page_number * page_size,
			page_number * page_size + page_size
		)
	}

	const goPrev = () => {
		return pageNumber - 1 <= 0
			? setPageNumber(1)
			: setPageNumber(pageNumber - 1)
	}
	const goNext = () => {
		let arraySize = data.length - 1
		let pageSize = 4 // elements per page
		let pageLimit = Math.floor(arraySize / pageSize) // pagination limit, max. page to be reached
		return pageNumber + 1 > pageLimit
			? setPageNumber(pageLimit)
			: setPageNumber(pageNumber + 1)
	}

	return (
		<div>
			<div className={styles.offers}>
				{paginate(data, pageNumber).map((p: IProperty) => (
					<div id="card" key={`obj${p.id}`} className={styles.card}>
						<Image src={p.images[0]} alt="image" width={232} height={130} />
						<p>{`Preço ${currencyFormat.format(
							parseInt(p.pricingInfos.price)
						)}`}</p>
					</div>
				))}
			</div>

			<div id="paginate" className={styles.paginate}>
				<button onClick={goPrev}>
					<GrPrevious />
				</button>
				<p>{pageNumber}</p>
				<button onClick={goNext}>
					<GrNext />
				</button>
			</div>
		</div>
	)
}
