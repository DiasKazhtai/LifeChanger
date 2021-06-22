import TelephoneInput from '../../components/TelephoneInput';
import styles from './Login.module.scss';

export default function Login() {
    return (
        <div className={styles.Login}>
            <div className={styles.Login__container}>
                <div className={styles.Login__auth}>
                    <div className={styles.Login__auth_item}>Вход</div>
                    <div className={styles.Login__auth_item}>Регистрация</div>
                </div>
                <TelephoneInput />
            </div>
        </div>
    )
}