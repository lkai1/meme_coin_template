"use client"

import styles from "./ContractAddress.module.css"

const ContractAddress = () => {

	return (
		<div className={styles.main}>
			<div className={styles.caTextContainer}>
				<p className={styles.caText}>
					0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2
				</p>
			</div>
			<button className={styles.copyButton} onClick={async () => {
				await navigator.clipboard.writeText("0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2")
			}}>
				Copy
			</button>
		</div>
	)
}

export default ContractAddress