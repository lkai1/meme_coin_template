"use client"

import styles from "./ContractAddress.module.css"

const ContractAddress = () => {

	return (
		<div className={styles.main}>
			<div className={styles.caTextContainer}>
				<p className={styles.caText}>
					0x594DaaD7D77592a2b97b725A7AD59D7E188b5bFa
				</p>
			</div>
			<button className={styles.copyButton} onClick={async () => {
				await navigator.clipboard.writeText("0x594DaaD7D77592a2b97b725A7AD59D7E188b5bFa")
			}}>
				Copy
			</button>
		</div>
	)
}

export default ContractAddress