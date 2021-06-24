import { useState } from "react";
import CodeSmsStep from "./components/CodeSmsStep";
import NumberStep from "./components/NumberStep";

const TABS = [
    {
        component: NumberStep,
        title: 'NumberStep',
    },
    {
        component: CodeSmsStep,
        title: 'CodeSmsStep',
    },
];

export default function Registration({ updateDate }: any) {

        const [state, setState] = useState<any>(0);
        const tab = TABS[state];

        const regUpdateDate = (value: any): void => {
            setState(value);
        };

        return(
                <>
                    {tab && <tab.component updateDate={updateDate} regUpdateDate={regUpdateDate} />}
                </>
        ) 
};