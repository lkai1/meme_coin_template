"use client"

import styles from "./TokenomicsSlide.module.css"
import { motion } from "framer-motion"

const TokenomicsSlide = () => {
	return (
		<div className={styles.main}>
			<motion.div
				className={styles.sliderContainer}
				initial={{ x: "0%" }}
				animate={{ x: "100%" }}
				transition={{
					repeat: 0,
					duration: 2.5,
					ease: "linear"
				}}
			>
				<div className={styles.slidingItem}>
					<p>Taxes 0/0</p>
				</div>
				<div className={styles.slidingItem}>
					<p>Contract renounced</p>
				</div>
				<div className={styles.slidingItem}>
					<p>Liquidity burned</p>
				</div>
				<div className={styles.slidingItem}>
					<p>Total supply 1B</p>
				</div>
			</motion.div>
			<motion.div
				className={styles.sliderContainer}
				initial={{ x: "-100%" }}
				animate={{ x: "100%" }}
				transition={{
					repeat: Infinity,
					duration: 5,
					ease: "linear"
				}}
			>
				<div className={styles.slidingItem}>
					<p>Taxes 0/0</p>
				</div>
				<div className={styles.slidingItem}>
					<p>Contract renounced</p>
				</div>
				<div className={styles.slidingItem}>
					<p>Liquidity burned</p>
				</div>
				<div className={styles.slidingItem}>
					<p>Total supply 1B</p>
				</div>
			</motion.div>
			<motion.div
				className={styles.sliderContainer}
				initial={{ x: "-100%" }}
				animate={{ x: "100%" }}
				transition={{
					repeat: Infinity,
					duration: 5,
					ease: "linear",
					delay: 2.5
				}}
			>
				<div className={styles.slidingItem}>
					<p>Taxes 0/0</p>
				</div>
				<div className={styles.slidingItem}>
					<p>Contract renounced</p>
				</div>
				<div className={styles.slidingItem}>
					<p>Liquidity burned</p>
				</div>
				<div className={styles.slidingItem}>
					<p>Total supply 1B</p>
				</div>
			</motion.div>
		</div>
	)
}

export default TokenomicsSlide