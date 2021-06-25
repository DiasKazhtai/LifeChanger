import { useState } from 'react';
import { JsxElement } from 'typescript';
import Login from '../Login';
import Registartion from '../Registartion';
import styles from './Auth.module.scss';
// import { useLocation } from 'react-router-dom';

interface Tabs {
    component: () => Element;
    title: string;
  }

const TABS = [
    {
        component: Login,
        title: 'Login step',
    },
    {
        component: Registartion,
        title: 'Registartion step',
    },
];

export default function Auth() {
    const [state, setState] = useState<any>(0);
    const tab = TABS[state];

    const updateDate = (value: any): void => {
        setState(value);
    };

    return(
        <div className={styles.Auth}>
            <div className={styles.Auth__header}>Auth</div>
            {tab && <tab.component updateDate={updateDate} />}
        </div>
    ) 
};