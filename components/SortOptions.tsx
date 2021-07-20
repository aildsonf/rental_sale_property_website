import { maxPriceSort, minPriceSort } from "../libs/customFilters"
import { IProperty } from "../libs/customInterfaces"
// css
import styles from "../styles/Home.module.css"

type Props = {
	data: Array<IProperty>
	updateData: Function
	forceRender: Function
	resetPage: Function
}

export default function SortOptions({ data, updateData, forceRender, resetPage }: Props) {
	const handleItemsSort = (sortFunction: Function) => {
		updateData(sortFunction(data))
		forceRender(Date.now())
		resetPage(1)
	}

	return (
		<span className={styles.sort}>
			<p>Ordenar: </p>
			<a
				onClick={(e) => {
					handleItemsSort(minPriceSort)
				}}
			>
				menor preço
			</a>
			<a
				onClick={(e) => {
					handleItemsSort(maxPriceSort)
				}}
			>
				maior preço
			</a>
		</span>
	)
}
