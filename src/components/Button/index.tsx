import React from 'react';
import styles from './Button.module.scss';

interface ButtonInterface {
    children: string,
    style: any,
};

export default function Button({style, children}: ButtonInterface) {
    return (
        <button className={styles.Button} style={style}>{children}</button>
    )
};