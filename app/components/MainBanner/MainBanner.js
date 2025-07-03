import styles from "./MainBanner.module.css"

const MainBanner = () => {

	return (
		<div className={styles.main}>
			<img src="/images/main_banner.jpg" className={styles.backgroundImg} />
		</div>
	)
}

export default MainBanner