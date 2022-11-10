import React from 'react';
import s from './Footer.module.css'
import stylesFooter from '../common/Styles/Container.module.css'
import {Icon} from "./Icon/Icon";

export const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={`${stylesFooter.container} ${s.footerContainer}`}>
                <h2>Костромин Александр</h2>
                <div className={s.content}>
                    <Icon/>
                    <Icon/>
                    <Icon/>
                    <Icon/>
                </div>
                <div className={s.copyright}>
                    <img src="https://1000logos.net/wp-content/uploads/2021/07/Copyright-Symbol.png" className={s.imgCopyright}/>
                    <h2>2022 Все права защищены</h2>
                </div>
            </div>

        </div>
    );
};

