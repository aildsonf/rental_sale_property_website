import Image from "next/image"
import { useState } from "react"
import styles from "../styles/Home.module.css"
import { GrNext, GrPrevious } from "react-icons/gr"

type Props = {
	images: Array<string>
}

export default function Carousel({ images }: Props) {
	const [imageNumber, setImageNumber] = useState<number>(0)

	const handlePrevImage = () => {
		return imageNumber - 1 < 0
			? setImageNumber(0)
			: setImageNumber(imageNumber - 1)
	}
	const handleNextImage = () => {
		return imageNumber + 1 > images.length - 1
			? setImageNumber(images.length - 1)
			: setImageNumber(imageNumber + 1)
	}

	return (
		<>
			<button onClick={handlePrevImage} className={styles.btn}>
				<GrPrevious />
			</button>
			<Image
				src={images[imageNumber]}
				alt=""
				layout="fixed"
				height={200}
				width={300}
				className={styles.borderRadius}
			/>
			<button onClick={handleNextImage} className={styles.btn}>
				<GrNext />
			</button>
		</>
	)
}
