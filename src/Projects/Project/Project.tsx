import React from 'react';
import s from './Project.module.css'

export const Project = () => {
    return (
        <div className={s.projectContainer}>
            <div className={s.imageContainer}>
                <a href="" className={s.link}>Смотреть</a>
            </div>
            <div className={s.work}>Мои работы</div>
            <span className={s.description}>Краткое описание</span>
        </div>
    );
};

