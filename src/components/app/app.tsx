import React from "react";
import styles from "./app.module.css";
import { CustomHeader } from "../desktop/header/custom-header";
import { CustomFooter } from "../desktop/footer/custom-footer";
import { PageContent } from "../desktop/page-content/page-content";
import { useMediaQuery } from "react-responsive";
import { MobileHeader } from "../mobile/header/mobile-header";
import { MobileFooter } from "../mobile/footer/mobile-footer";
import { MainScreen } from "../mobile/main-screen/main-screen";

function App() {
    const isSmallScreen = useMediaQuery({ query: "(max-width:500)" });
    return (
        <div className={styles.AppWrapper}>
            {!isSmallScreen ? (
                <>
                    <div className={styles.AppDesktopContent}>
                        <CustomHeader />
                        <PageContent />
                        <CustomFooter />
                    </div>
                    <div className={styles.AppRedLight}></div>
                    <div className={styles.AppPurpleLight}></div>
                    <div className={styles.AppRedBall}></div>
                    <div className={styles.AppRedBigBall}></div>
                    <div className={styles.AppPurpleBall}></div>
                </>
            ) : (
                <>
                    <div className={styles.AppMobileContent}>
                        <MobileHeader />
                        <MainScreen />
                        <MobileFooter />
                    </div>
                </>
            )}
        </div>
    );
}

export default App;
