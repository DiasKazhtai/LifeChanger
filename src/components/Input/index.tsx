import { useState, useEffect } from 'react';
import styles from './Input.module.scss';
import cn from 'classnames';

export default function Input() {
    const [isActive, setActive] = useState<Boolean>(false);

    // useEffect(() => {

    //  });
    
    return(
        <div className={styles.Input}
            onClick={() => setActive(true)} 
        >
            <label 
                className={cn(styles.Input__label, [{[styles.Input__label_active]: isActive, }])}>Пароль</label>
            <input 
                type="text" 
                className={styles.Input__input}
                maxLength={16}
            />
        </div>
    )
};