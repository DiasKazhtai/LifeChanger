import React, { useEffect, useState } from 'react';
import styles from './Input.module.scss';
import cn from 'classnames';

export default function PhoneInput({style}: any) {

    console.log(style)

    const [isActive, setActive] = useState<Boolean>(false);
    const [numberLength, setLength] = useState<Number>(0);

    const onPhoneKeyDown = (e: any) => {
        let input = e.target;

        if(e.keyCode === 8 && getInputNumberValue(input).length === 1) {
            input.value = ''; 
        }
    };

    const getInputNumberValue = (input: any): string => input.value.replace(/\D/g, '');

    const onPhoneInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const input = e.target;
        let inputNumbersValue = getInputNumberValue(input);
        let formattedInputValue = '';
        // let selectionStart = input.selectionStart;
        
        if(!inputNumbersValue) return input.value = '';

        // Сброс форматирования при редактировании в середнине строки, если значение не цифра
        // Возможность редактирования в середине строки

        // if(input.value.length !== selectionStart) {
        //     if(e.nativeEvent.data && /\D/g.test(e.nativeEvent.data)) {
        //         input.value = inputNumbersValue;
        //     }
        //     return;
        // };

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
            formattedInputValue = '+' + inputNumbersValue.substring(0, 16);
        };

        input.value = formattedInputValue;
        setLength(formattedInputValue.length);
    };

    useEffect(() => {
       const closeLabeHander: any = document.addEventListener('click', (e: any) : void => {
            if(numberLength !== 18) {
                if(e.target.id !== 'phoneInput') {
                    setActive(false);
                }
            } else {
                setActive(true);
            }
        });

        return () => {
            document.removeEventListener('click', closeLabeHander);
        };
    });

    return (
        <div className={styles.Input} 
            onClick={() => setActive(true)} 
            style={style}
        >
            <label 
                htmlFor="phoneInput"
                className={cn(styles.Input__label, [{[styles.Input__label_active]: isActive, }])}>
                    Номер телефона</label>
            <input
                id="phoneInput" 
                type="tel" maxLength={18} 
                className={styles.Input__input}
                onKeyDown={onPhoneKeyDown} 
                onInput={onPhoneInput} 
            />
        </div>
    )
};