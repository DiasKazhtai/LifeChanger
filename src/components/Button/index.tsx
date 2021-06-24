import React from 'react';
import styles from './Button.module.scss';

interface ButtonInterface {
    children: string,
    style?: any,
    disabled?: boolean,
    onClick?: () => void,
};

export default function Button({style, children, disabled, onClick}: ButtonInterface) {

    return (
        <button
            onClick={onClick}
            className={styles.Button}
            disabled={disabled} 
            style={style}>{children}</button>
    )
};