import styles from './Input.module.scss';

export default function TelephoneInput() {

    const onPhoneKeyDown = (e: any) => {
        let input = e.target;
        if(e.keyCode === 8 && getInputNumberValue(input).length === 1) {
            input.value = ''; 
        }
    }

    const getInputNumberValue = (input: any) => input.value.replace(/\D/g, '');
 

    const onPhoneInput = (e: any) => {
        const input = e.target;
        let inputNumbersValue = getInputNumberValue(input);
        let formattedInputValue = '';
        let selectionStart = input.selectionStart;

        if(!inputNumbersValue) return input.value = '';

        if(input.value.length !== selectionStart) {
            console.log('werwer');
        };

        if(['7', '8', '9'].includes(inputNumbersValue[0])) {
            // Russian number
            if(inputNumbersValue[0] === '9') inputNumbersValue = '7' + inputNumbersValue;

            let firstSymbols = (inputNumbersValue[0] === '8') ? '8' : '+7'; 
            formattedInputValue = firstSymbols + ' ';

            if(inputNumbersValue.length > 1) {
                formattedInputValue += '(' + inputNumbersValue.substring(1, 4);
            }

            if(inputNumbersValue.length >= 5) {
                formattedInputValue += ') ' + inputNumbersValue.substring(4, 7);
            }
            
            if(inputNumbersValue.length >= 8) {
                formattedInputValue += '-' + inputNumbersValue.substring(7, 9);
            }
                        
            if(inputNumbersValue.length >= 10) {
                formattedInputValue += '-' + inputNumbersValue.substring(9, 11);
            }
        } else {
            // Not russian numbers
            formattedInputValue = '+' + inputNumbersValue.substring(0, 16)
        };

        input.value = formattedInputValue;

    };

    return (
        <input type="tel" maxLength={18} 
        className={styles.Input}
        onKeyDown={(e) => onPhoneKeyDown(e)} 
        onInput={(e) => onPhoneInput(e)} />
    )
};