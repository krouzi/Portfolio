import React from 'react';
import s from './Skill.module.css'

type SkillType = {
    title:string
    description:string
}

export const Skill = (props:SkillType) => {
    return (
        <div className={s.skill}>
            <div className={s.icon}></div>
            <h3 className={s.title}>{props.title}</h3>
            <span className={s.description}>{props.description}</span>
        </div>
    );
};

