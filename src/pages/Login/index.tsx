import Input from '../../components/Input';
import PhoneInput from '../../components/PhoneInput';
import Button from '../../components/Button';
import styles from './Login.module.scss';

export default function Login({updateDate}: any) {

    return (
        <div className={styles.Login}>
            <div className={styles.Login__container}>
                <div className={styles.Login__auth}>
                    <div className={styles.Login__auth_item}>Вход</div>
                    <div className={styles.Login__auth_item} onClick={() => updateDate(1)}>Регистрация</div>
                </div>
                <PhoneInput style={{
                    marginBottom: '50px',
                }} />
                <Input type="password" />
                <Button style={{
                    marginTop: '50px',
                }}>Войти</Button>
                <div className={styles.Login__forgotPassword}>Не помню пароль</div>
            </div>
        </div>
    )
}