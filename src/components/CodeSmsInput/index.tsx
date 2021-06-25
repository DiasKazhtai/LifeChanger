import React, { useEffect, useRef } from 'react';
import styles from './CodeSmsInput.module.scss';

export default function CodeSmsInput() {
    const firstInputRef = useRef<HTMLInputElement>(null);
    const secondInputRef = useRef<HTMLInputElement>(null);
    const thirdInputRef = useRef<HTMLInputElement>(null);
    const fourthInputRef = useRef<HTMLInputElement>(null);
    
    const inputHandler = (e: React.KeyboardEvent): void => {
        if(firstInputRef.current?.value.length === 1) {            
            if(e.code !== 'Backspace') {
                secondInputRef.current?.focus();
            }
        };

        if(secondInputRef.current?.value.length === 1) {            
            if(e.code !== 'Backspace') {
                thirdInputRef.current?.focus();
            }
        };
        
        if(thirdInputRef.current?.value.length === 1) {
            if(e.code !== 'Backspace') {
                fourthInputRef.current?.focus();
            }
        };
    };

    useEffect(() => {
        firstInputRef.current?.focus();
    }, []);

    return(
        <div className={styles.CodeSmsInput}>
            <div className={styles.CodeSmsInput__container} onKeyDown={inputHandler}>
                <input type="text" maxLength={1} className={styles.CodeSmsInput__item} ref={firstInputRef} />
                <input type="text" maxLength={1} className={styles.CodeSmsInput__item} ref={secondInputRef} />
                <input type="text" maxLength={1} className={styles.CodeSmsInput__item} ref={thirdInputRef} />
                <input type="text" maxLength={1} className={styles.CodeSmsInput__item} ref={fourthInputRef} />
            </div>
            {/* <div className={styles.CodeSmsInput__time}>Новый код можно запросить через {time} сек</div> */}
        </div>
    )
};