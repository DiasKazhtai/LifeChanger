import { useState } from 'react';
import styles from './Input.module.scss';
import cn from 'classnames';

interface InputInterface {
    type?: string,
};

export default function Input({ type }: InputInterface) {
    const [isActive, setActive] = useState<Boolean>(false);
    const [isVisibility, setVisibility] = useState<Boolean>(false);

   return (type === 'password' ? (
            <div className={styles.Input}
            onClick={() => setActive(true)} 
            >
                <label 
                    className={cn(styles.Input__label, [{[styles.Input__label_active]: isActive, }])}>Пароль</label>
                <input 
                    type={isVisibility ? 'text': 'password'} 
                    className={styles.Input__input}
                    maxLength={16}
                />
                <span 
                    className={cn('material-icons', styles.Input__visibility, [{[styles.Input__visibility__off]: isVisibility}])}
                    onClick={() => setVisibility(true)}
                        >visibility</span>
                <span 
                    className={cn('material-icons', styles.Input__visibilityOff, [{[styles.Input__visibilityOff__on]: isVisibility}])}
                    onClick={() => setVisibility(false)}
                        >visibility_off</span>
            </div>
    ): (<div>45</div>) )
};