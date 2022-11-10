import React from 'react';
import s from './Contacts.module.css'
import stylesContainer from '../common/Styles/Container.module.css'

export const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={`${stylesContainer.container} ${s.contactsContainer}`}>
                <h2>Контакты</h2>
                <form action="" className={s.contactsForm}>
                    <input type="text"/>
                    <input type="text"/>
                    <textarea name="" id=""></textarea>
                </form>
                    <a href="" className={s.link}>Отправить</a>
            </div>

        </div>
    );
};

