import { FC } from "react";
import styles from "./main-screen.module.css";
interface MainScreenProps {}

const MainScreen: FC<MainScreenProps> = () => {
    return (
        <>
            <div className={styles.mainScreen}>
                <div className={styles.topBlock}>
                    <p>Зарабатывайте больше</p>
                    <span>c WELBEX</span>
                    <p className={styles.descr}>
                        Развиваем и контролируем продажи за вас
                    </p>
                </div>
                <div className={styles.bottomBlock}>
                    <p>
                        Вместе c <span>бесплатной консультацией</span> мы дарим:
                    </p>
                    <ul>
                        <li>Skype аудит</li>
                        <li>Dashboard</li>
                    </ul>
                    <ul>
                        <li>30 виджетов</li>
                        <li>Месяц amoCRM</li>
                    </ul>
                </div>
                <div className={styles.MobilePurpleLight}></div>
                <div className={styles.MobileRedLight}></div>
                <div className={styles.MobileYellowLight}></div>
                <div className={styles.MobileRedBall}></div>
                <div className={styles.MobilePurpleBall}></div>
            </div>
        </>
    );
};
export { MainScreen };
