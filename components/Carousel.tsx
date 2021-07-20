import Image from "next/image"
import { useState } from "react"
import { GrNext, GrPrevious } from "react-icons/gr"
// css
import styles from "../styles/Home.module.css"

type Props = {
	images: Array<string>
}

export default function Carousel({ images }: Props) {
	const [imageNumber, setImageNumber] = useState<number>(0)

	const handlePrevImage = () => {
		return imageNumber - 1 < 0 ? setImageNumber(0) : setImageNumber(imageNumber - 1)
	}
	const handleNextImage = () => {
		return imageNumber + 1 > images.length - 1 ? setImageNumber(images.length - 1) : setImageNumber(imageNumber + 1)
	}

	return (
		<div className={styles.carousel}>
			<button onClick={handlePrevImage}>
				<GrPrevious />
			</button>
			<Image src={images[imageNumber]} alt="" layout="fixed" height={150} width={256} objectFit="cover" />
			<button onClick={handleNextImage}>
				<GrNext />
			</button>
		</div>
	)
}
