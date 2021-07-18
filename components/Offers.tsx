import _ from "lodash"

// local imports
import { IProperty } from "../libs/customInterfaces"
import { paginate } from "../libs/pagination"
import styles from "../styles/Home.module.css"
import Card from "./Card"

export interface Props {
	data: Array<IProperty>
	pageNumber: number
}

export default function Offers({ data, pageNumber }: Props) {
	return (
		<div className={styles.offers}>
			<div className={styles.grid}>
				{_.map(paginate(data, pageNumber), (p: IProperty) => (
					<Card key={p.id} obj={p} />
				))}
			</div>
		</div>
	)
}
