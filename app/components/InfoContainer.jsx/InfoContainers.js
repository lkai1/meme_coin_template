import styles from "./InfoContainers.module.css"

const InfoContainers = () => {

	return (
		<div className={styles.main}>
			<div className={styles.infoContainer}>
				<img className={styles.infoImgLeft} src="/images/infoImg.png" />
				<div className={styles.infoTextContainerLeft}>
					<p className={styles.infoTextTitle}>
						About
					</p>
					<p className={styles.infoText}>
						Apustaja Coin (APU) is an Ethereum-based meme coin that prioritizes transparency, a solid community, and integration with DeFi technology. With an ambitious roadmap and a focus on long-term value, APU has great potential in the crypto market.
					</p>
				</div>
			</div>
			<div className={styles.infoContainer}>

				<div className={styles.infoTextContainerRight}>
					<p className={styles.infoTextTitle}>
						Legacy
					</p>
					<p className={styles.infoText}>
						Apu Apustaja, also known as “Help Helper” in Finnish, is a meme that emerged as a variation of Pepe the Frog, with a similar style to Spurdo Spärde. Initially gaining popularity on the Finnish imageboard Ylilauta in early 2016, it became a staple on 4chan and other forums.
					</p>
				</div>
				<img className={styles.infoImgRight} src="/images/infoImg2.png" />
			</div>
		</div>
	)
}

export default InfoContainers