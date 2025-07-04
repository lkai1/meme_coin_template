"use client"

import styles from "./MainBanner.module.css"

const MainBanner = () => {
	const basePath = process.env.NODE_ENV === 'production' ? '/meme_coin_template' : '';

	return (
		<div className={styles.main}>
			<img src={`${basePath}/images/main_banner.webp`} className={styles.backgroundImg} />
		</div>
	)
}

export default MainBanner