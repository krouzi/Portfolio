import React from 'react';
import s from './Main.module.css';
import styleContainer from '../common/Styles/Container.module.css'

export const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={styleContainer.container}>
            <div className={s.text}>
                <span>Hi There</span>
                <h1>Aleksandr Kostromin</h1>
                <p>Frontend Developer</p>
            </div>
            <div className={s.photo}></div>
            </div>
        </div>
    );
};
