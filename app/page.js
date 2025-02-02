import ContractAddress from "./components/ContractAddress/ContractAddress";
import InfoContainers from "./components/InfoContainer.jsx/InfoContainers";
import LinksContainer from "./components/LinksContainer/LinksContainer";
import MainBanner from "./components/MainBanner/MainBanner";
import NavBar from "./components/NavBar/NavBar";
import TokenomicsSlide from "./components/TokenomicsSlide/TokenomicsSlide";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.main}>
      <NavBar />
      <MainBanner />
      <TokenomicsSlide />
      <ContractAddress />
      <InfoContainers />
      <LinksContainer />
    </div>
  );
}
