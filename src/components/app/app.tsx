import React from "react";
import styles from "./app.module.css";
import { CustomHeader } from "../desktop/header/custom-header";
import { CustomFooter } from "../desktop/footer/custom-footer";
import { PageContent } from "../desktop/page-content/page-content";
import { useMediaQuery } from "react-responsive";
import { MobileHeader } from "../mobile/header/mobile-header";
import { MobileFooter } from "../mobile/footer/mobile-footer";
import { MainScreen } from "../mobile/main-screen/main-screen";

const Desktop = ({ children }: any) => {
    const isDesktop = useMediaQuery({ minWidth: 501 });
    return isDesktop ? children : null;
};

const Mobile = ({ children }: any) => {
    const isMobile = useMediaQuery({ maxWidth: 500 });
    return isMobile ? children : null;
};

function App() {
    return (
        <>
            <Desktop>
                <div className={styles.AppDesktopWrapper}>
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
                </div>
            </Desktop>
            <Mobile>
                <div className={styles.AppMobileWrapper}>
                    <div className={styles.AppMobileContent}>
                        <MobileHeader />
                        <MainScreen />
                        <MobileFooter />
                    </div>
                </div>
            </Mobile>
        </>
    );
}

export default App;
