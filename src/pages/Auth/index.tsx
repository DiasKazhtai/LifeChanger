import { useState } from 'react';
import styles from './Auth.module.scss';

const TABS: any = {
    auth: 'auth',
    registartion: 'registartion'
}

export default function Auth() {
    const [state, setState] = useState<any>(0);

    const tab = TABS[state];
    return(
        <div className={styles.Auth}>
            <div className={styles.Auth__header}>Auth</div>
            <div className={styles.Auth__title}>Личный кабинет</div>
            <div className={styles.Auth__container}>
                {/* {<tab>} */}
            </div>
        </div>
    ) 
};