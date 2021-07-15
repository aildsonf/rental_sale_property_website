import { IProperty } from "../libs/propertyInterface"
import styles from "../styles/Home.module.css"

export interface Props {
	data: Array<IProperty>
}

export default function Offers({ data }: Props) {
	return (
		<div className={styles.offers}>
			{data.map((p: IProperty) => (
				<div key={`obj${p.id}`} className={styles.card}>
					<p>{p.id}</p>
				</div>
			))}
		</div>
	)
}
