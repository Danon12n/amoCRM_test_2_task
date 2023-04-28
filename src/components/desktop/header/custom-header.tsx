import { FC } from "react";
import styles from "./custom-header.module.css";
import {
    IconLogo,
    IconTelegram,
    IconViber,
    IconWhatsApp,
} from "../../ui/icons";
interface CustomHeaderProps {}

const CustomHeader: FC<CustomHeaderProps> = () => {
    return (
        <div className={styles.headerContent}>
            <div className={styles.headerLogo}>
                <IconLogo />
                <p>крупный интегратор CRM в России и ещё 8 странах</p>
            </div>
            <div className={styles.headerNavMenu}>
                <p>Услуги</p>
                <p>Виджеты</p>
                <p>Интеграции</p>
                <p>Кейсы</p>
                <p>Сертификаты</p>
            </div>
            <div className={styles.headerTelephone}>{"+7 555 555-55-55"}</div>
            <div className={styles.headerMedia}>
                <IconTelegram />
                <IconViber />
                <IconWhatsApp />
            </div>
        </div>
    );
};
export { CustomHeader };
