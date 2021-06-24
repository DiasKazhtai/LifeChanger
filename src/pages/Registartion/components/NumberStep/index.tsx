import React, { useState } from 'react';
import Button from '../../../../components/Button';
import PhoneInput from '../../../../components/PhoneInput';
import styles from './NumberStep.module.scss';

export default function NumberStep({ updateDate, regUpdateDate }: any) {
    const [isDisabled, setDisabled] = useState<any>(true);

    const checkboxHandler = (): void => {
        setDisabled(!isDisabled);
    };

    return (
        <div className={styles.NumberStep}>
            <div className={styles.NumberStep__container}>
                <div className={styles.NumberStep__auth}>
                    <div className={styles.NumberStep__auth_item} onClick={() => updateDate(0)}>Вход</div>
                    <div className={styles.NumberStep__auth_item}>Регистрация</div>
                </div>
                <PhoneInput style={{
                    marginBottom: '25px',
                }} />
                <label htmlFor="dates" className={styles.NumberStep__label}>
                    <input type="checkbox"onChange={checkboxHandler} />
                    <p>Согласен на обработку<span> персональных данных</span></p>
                </label>
                <Button disabled={isDisabled} onClick={() => regUpdateDate(1)}>Далее</Button>
            </div>
        </div>
    )
};