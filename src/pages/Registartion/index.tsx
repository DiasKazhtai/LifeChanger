import styles from './Registration.module.scss';

export default function Registration({ updateDate }: any) {
    return (
        <div className={styles.Registration}>
        <div className={styles.Registration__container}>
            <div className={styles.Registration__auth}>
                <div className={styles.Registration__auth_item} onClick={() => updateDate(0)}>Вход</div>
                <div className={styles.Registration__auth_item}>Регистрация</div>
            </div>
        </div>
    </div>
    )
}