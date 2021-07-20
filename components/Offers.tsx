import _ from "lodash"
// local imports
import { IProperty } from "../libs/customInterfaces"
import { paginate } from "../libs/pagination"
import Card from "./Card"
// css
import styles from "../styles/Home.module.css"

export interface Props {
	data: Array<IProperty>
	pageNumber: number
}

export default function Offers({ data, pageNumber }: Props) {
	return (
		<div className={styles.offers}>
			{_.map(paginate(data, pageNumber), (property: IProperty) => (
				<Card key={property.id} property={property} />
			))}
		</div>
	)
}
