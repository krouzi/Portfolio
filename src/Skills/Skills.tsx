import React from 'react';
import s from './Skills.module.css'
import stylesContainer from '../common/Styles/Container.module.css'
import {Skill} from "./Skill/Skill";

export const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${stylesContainer.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>Skills</h2>
                <div className={s.skills}>
                    <Skill title='React' description={'I know React'}/>
                    <Skill title='HTML' description={'I know HTML'}/>
                    <Skill title='CSS' description={'I know CSS'}/>
                </div>
            </div>

        </div>
    );
};

