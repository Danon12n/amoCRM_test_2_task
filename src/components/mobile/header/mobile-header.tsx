import { FC } from "react";
import styles from "./mobile-header.module.css"
interface MobileHeaderProps {}

const MobileHeader: FC<MobileHeaderProps> = () => {
    return <div className={styles.mobileHeader}>
        <p>Услуги</p>
        <p>Виджеты</p>
        <p>Интеграции</p>
        <p>Кейсы</p>
    </div>;
};
export { MobileHeader };
