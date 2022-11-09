import React from 'react';
import s from './Project.module.css'

export const Project = () => {
    return (
        <div className={s.projectContainer}>
            <div className={s.imageContainer}>
                <img src="" alt=""/>
                <a href="" className={s.link}>Посмотреть</a>
            </div>
            <div>Мои работы</div>
            <span>Краткое описание</span>
        </div>
    );
};

