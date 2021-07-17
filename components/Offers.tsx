import { useState } from "react"
import { GrNext, GrPrevious } from "react-icons/gr"

// local imports
import { IProperty } from "../libs/customInterfaces"
import { nextPage, paginate, prevPage } from "../libs/pagination"
import styles from "../styles/Home.module.css"
import Card from "./Card"

export interface Props {
	data: Array<IProperty>
}

export default function Offers({ data }: Props) {
	const [pageNumber, setPageNumber] = useState<number>(1)

	return (
		<div className={styles.offers}>
			{paginate(data, pageNumber).map((p: IProperty) => (
				<Card key={p.id} obj={p} />
			))}

			<div className={styles.paginate}>
				<button onClick={(e) => setPageNumber(prevPage(pageNumber))}>
					<GrPrevious />
				</button>

				<p className={styles.textColor}>{pageNumber}</p>

				<button onClick={(e) => setPageNumber(nextPage(data, pageNumber))}>
					<GrNext />
				</button>
			</div>
		</div>
	)
}
