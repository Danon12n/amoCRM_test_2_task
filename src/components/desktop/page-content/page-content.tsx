import { FC } from "react";
import styles from "./page-content.module.css";
interface PageContentProps {}

const PageContent: FC<PageContentProps> = () => {
    return (
        <div className={styles.PageContent}>
            <div className={styles.leftContent}>
                <p>Зарабатывайте больше</p>
                <span>c WELBEX</span>
                <div className={styles.subText}>
                    Развиваем и контролируем продажи за вас
                </div>
            </div>
            <div className={styles.rightContent}>
                <div className={styles.rightContent_top}>
                    Вместе c <span>бесплатной консультацией</span> мы дарим:
                </div>
                <div className={styles.rightContentRow}>
                    <div className={styles.rightContentBox}>
                        <p className={styles.rightContentBox_title}>Виджеты</p>
                        <p className={styles.rightContentBox_descr}>
                            30 готовых решений
                        </p>
                    </div>
                    <div className={styles.rightContentBox}>
                        <p className={styles.rightContentBox_title}>
                            Dashboard
                        </p>
                        <p className={styles.rightContentBox_descr}>
                            c показателями вашего бизнеса
                        </p>
                    </div>
                </div>
                <div className={styles.rightContentRow}>
                    <div className={styles.rightContentBox}>
                        <p className={styles.rightContentBox_title}>
                            Skype Аудит
                        </p>
                        <p className={styles.rightContentBox_descr}>
                            отдела продажи CRM системы
                        </p>
                    </div>
                    <div className={styles.rightContentBox}>
                        <p className={styles.rightContentBox_title}>35 дней</p>
                        <p className={styles.rightContentBox_descr}>
                            использования CRM
                        </p>
                    </div>
                </div>
                <button>Получить консультацию</button>
            </div>
        </div>
    );
};
export { PageContent };
