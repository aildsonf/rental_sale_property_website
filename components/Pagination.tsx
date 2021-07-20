import { nextPage, prevPage } from "../libs/pagination"
import { GrNext, GrPrevious } from "react-icons/gr"
// css
import styles from "../styles/Home.module.css"

type Props = {
	updatePage: Function
	currentPage: number
	dataLength: number
}

export default function Pagination({ updatePage, currentPage, dataLength }: Props) {
	return (
		<div className={styles.paginate}>
			<button onClick={(e) => updatePage(prevPage(currentPage))}>
				<GrPrevious />
			</button>
			<p>{currentPage}</p>
			<button onClick={(e) => updatePage(nextPage(dataLength, currentPage))}>
				<GrNext />
			</button>
		</div>
	)
}
