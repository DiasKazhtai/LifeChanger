import Button from '../../../../components/Button';
import Input from '../../../../components/Input';
import styles from './UserDateStep.module.scss';
import { NavLink } from 'react-router-dom';

export default function UserDateStep() {
    return (
        <div className={styles.UserDateStep}>
            <div className={styles.UserDateStep__text}>
                <p>Финишная прямая!</p>
                <p>Будет круто, если мы узнаем теяб поближе.</p>
                <p>Но если что - мы не заставляем.</p>
            </div>
            <Input label='Фамилия' style={{marginBottom: '40px',}} />
            <Input label='Имя' style={{marginBottom: '40px',}} />
            <Input label='Отчество' style={{marginBottom: '40px',}} />
            <Button>Сохранить</Button>
            <NavLink to='/'>123</NavLink>
        </div>
    )
};