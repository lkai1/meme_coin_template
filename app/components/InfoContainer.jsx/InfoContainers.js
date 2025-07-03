"use client"

import styles from "./InfoContainers.module.css"

const InfoContainers = () => {

	const basePath = process.env.NODE_ENV === 'production' ? '/meme_coin_template' : '';

	return (
		<div className={styles.main}>
			<div className={styles.infoContainer}>
				<img className={styles.infoImgLeft} src={`${basePath}/images/infoImg.jpg`} />
				<div className={styles.infoTextContainerLeft}>
					<p className={styles.infoTextTitle}>
						About
					</p>
					<p className={styles.infoText}>
						Kenny Coin (KENNY) is an Ethereum-based meme coin that prioritizes transparency, a solid community, and integration with DeFi technology. With an ambitious roadmap and a focus on long-term value, KENNY has great potential in the crypto market.
					</p>
				</div>
			</div>
			<div className={styles.infoContainer}>

				<div className={styles.infoTextContainerRight}>
					<p className={styles.infoTextTitle}>
						Legacy
					</p>
					<p className={styles.infoText}>
						Kenneth "Kenny" McCormick is one of the four main protagonists of the South Park franchise.
						He is noted for his frequent deaths in earlier seasons and his muffled speech, which is likely the cause of his ostensive lack of focus compared to the other protagonists.
					</p>
				</div>
				<img className={styles.infoImgRight} src={`${basePath}/images/infoImg2.jpg`} />
			</div>
		</div>
	)
}

export default InfoContainers