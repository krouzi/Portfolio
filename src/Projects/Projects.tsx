import React from 'react';
import s from './Projects.module.css'
import stylesContainer from '../common/Styles/Container.module.css'
import {Project} from "./Project/Project";

export const Projects = () => {
    return (
        <div className={s.projectsBlock}>
            <div className={`${stylesContainer.container} ${s.projectsContainer}`}>
                <h2 className={s.title}>Мои работы</h2>
                <div className={s.projects}>
                    <Project/>
                    <Project/>
                </div>
            </div>

        </div>
    );
};
