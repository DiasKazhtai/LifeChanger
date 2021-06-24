import CodeSmsInput from '../../../../components/CodeSmsInput';
import styles from './CodeSmsStep.module.scss';

export default function CodeSmsStep() {
    return (
        <div className={styles.CodeSmsStep}>
            <div className={styles.CodeSmsStep__numberText}>Сейчас придёт СМС-ка с кодом подтверждения
                на твой номер <span>+7 (911) 271-65-23</span>
            </div>
            <div className={styles.CodeSmsStep__codeText}>Не забудьте потом установить собственный пароль,
             чтобы не входить через одноразовые коды</div>
             <CodeSmsInput />
        </div>
    )
};