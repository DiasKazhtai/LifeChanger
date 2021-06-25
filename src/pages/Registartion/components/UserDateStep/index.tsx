import Button from '../../../../components/Button';
import Input from '../../../../components/Input';
import styles from './UserDateStep.module.scss';
import { NavLink } from 'react-router-dom';

export default function UserDateStep({ updateDate, regUpdateDate }: any) {
    return (
        <div className={styles.UserDateStep}>
            <div className={styles.UserDateStep__back} onClick={() => regUpdateDate(1)}>Назад</div>
            <div className={styles.UserDateStep__text}>
                <p>Финишная прямая!</p>
                <p>Будет круто, если мы узнаем теяб поближе.</p>
                <p>Но если что - мы не заставляем.</p>
            </div>
            <Input label='Фамилия' style={{marginBottom: '40px',}} />
            <Input label='Имя' style={{marginBottom: '40px',}} />
            <Input label='Отчество' style={{marginBottom: '40px',}} />
            <NavLink to='/'>
                <Button>Сохранить</Button>
            </NavLink>
            <NavLink to='/' className={styles.UserDateStep__skipText}>Пропустить этот шаг</NavLink>
        </div>
    )
};