"use client"

import styles from "./LinksContainer.module.css"

const Tokenomics = () => {

	const basePath = process.env.NODE_ENV === 'production' ? '/meme_coin_template' : '';

	return (
		<div className={styles.main}>
			<img src={`${basePath}/images/dextools_logo_transparent.png`} className={styles.linkImg}
				onClick={() => {
					window.open("https://www.dextools.io", "_blank")
				}} />
			<img src={`${basePath}/images/dexscreener_logo_transparent.png`} className={styles.linkImg}
				onClick={() => {
					window.open("https://dexscreener.com", "_blank")
				}} />
			<img src={`${basePath}/images/coingecko_logo_transparent.png`} className={styles.linkImg}
				onClick={() => {
					window.open("https://www.coingecko.com", "_blank")
				}} />
			<img src={`${basePath}/images/coinmarketcap_logo_transparent.png`} className={styles.linkImg}
				onClick={() => {
					window.open("https://coinmarketcap.com", "_blank")
				}} />
			<img src={`${basePath}/images/telegram_logo_transparent.png`} className={styles.linkImg}
				onClick={() => {
					window.open("https://telegram.org", "_blank")
				}} />
			<img src={`${basePath}/images/discord_logo_transparent.png`} className={styles.linkImg}
				onClick={() => {
					window.open("https://discord.com", "_blank")
				}} />
			<img src={`${basePath}/images/x_logo_transparent.png`} className={styles.linkImg}
				onClick={() => {
					window.open("https://x.com", "_blank")
				}} />
		</div>
	)
}

export default Tokenomics