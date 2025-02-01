"use client"

import styles from "./LinksContainer.module.css"

const Tokenomics = () => {
	return (
		<div className={styles.main}>
			<img src="/images/dextools_logo_transparent.png" className={styles.linkImg}
				onClick={() => {
					window.open("https://www.dextools.io", "_blank")
				}} />
			<img src="/images/dexscreener_logo_transparent.png" className={styles.linkImg}
				onClick={() => {
					window.open("https://dexscreener.com", "_blank")
				}} />
			<img src="/images/coingecko_logo_transparent.png" className={styles.linkImg}
				onClick={() => {
					window.open("https://www.coingecko.com", "_blank")
				}} />
			<img src="/images/coinmarketcap_logo_transparent.png" className={styles.linkImg}
				onClick={() => {
					window.open("https://coinmarketcap.com", "_blank")
				}} />
			<img src="/images/telegram_logo_transparent.png" className={styles.linkImg}
				onClick={() => {
					window.open("https://telegram.org", "_blank")
				}} />
			<img src="/images/discord_logo_transparent.png" className={styles.linkImg}
				onClick={() => {
					window.open("https://discord.com", "_blank")
				}} />
			<img src="/images/x_logo_transparent.png" className={styles.linkImg}
				onClick={() => {
					window.open("https://x.com", "_blank")
				}} />
		</div>
	)
}

export default Tokenomics