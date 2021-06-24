import styles from './CodeSmsInput.module.scss';

export default function CodeSmsInput() {
    return(
        <div className={styles.CodeSmsInput}>
            <div className={styles.CodeSmsInput__container}>
                <input type="text" maxLength={1} className={styles.CodeSmsInput__item} />
                <input type="text" maxLength={1} className={styles.CodeSmsInput__item} />
                <input type="text" maxLength={1} className={styles.CodeSmsInput__item} />
                <input type="text" maxLength={1} className={styles.CodeSmsInput__item} />
            </div>
        </div>
    )
};