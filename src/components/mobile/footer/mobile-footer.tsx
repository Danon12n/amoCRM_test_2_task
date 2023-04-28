import { FC } from "react";
import styles from "./mobile-footer.module.css";
import { IconTelegram, IconViber, IconWhatsApp } from "../../ui/icons";
interface MobileFooterProps {}

const MobileFooter: FC<MobileFooterProps> = () => {
    return (
        <div className={styles.footerWrapper}>
            <div className={styles.footerContent}>
                <div className={styles.footerColumn}>
                    <span>О компании</span>
                    <ul>
                        <li>Партнёрская программа</li>
                        <li>Вакансии</li>
                    </ul>
                </div>
                <div className={styles.footerColumn}>
                    <span>Меню</span>
                    <div className={styles.footerLists}>
                        <ul>
                            <li>Расчёт стоимости</li>
                            <li>Услуги</li>
                            <li>Виджеты</li>
                            <li>Интеграции</li>
                            <li>Наши клиенты</li>
                        </ul>
                        <ul>
                            <li>Благодарность клиентов</li>
                            <li>Кейсы</li>
                            <li>Сертификаты</li>
                            <li>Блог на Youtube</li>
                            <li>Вопрос / Ответ</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.footerColumn}>
                    <span>Контакты</span>
                    <div>
                        <p>{"+7 555 555-55-55"}</p>
                        <div className={styles.footerColumnIcons}>
                            <IconTelegram />
                            <IconViber />
                            <IconWhatsApp />
                        </div>
                        <p>Москва, Путевой проезд 3c1, к 902</p>
                    </div>
                </div>
            </div>
            <div className={styles.underFooter}>
                <p>©WELBEX 2022. Все права защищены.</p>
                <a href='/'>Политика конфиденциальности</a>
            </div>
        </div>
    );
};
export { MobileFooter };
