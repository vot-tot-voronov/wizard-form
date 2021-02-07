import React from 'react';

import {MainContainer} from './maincontainer';
import {PrimaryButton} from './primaryButton';
import {useForm} from 'react-hook-form';
import {useHistory} from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import {useData} from '../DataContext';

export const Step2 = () => {
    const {data, setValues} = useData();

    const schema = yup.object().shape({
        lastName: yup.string().matches(/^([^0-9]*)$/).required(),
        firstName: yup.string().matches(/^([^0-9]*)$/).required(),
        middleName: yup.string().matches(/^([^0-9]*)$/).required(),
        email: yup.string().email(),
        phone: yup.string().matches(/\+7 \d{3} \d{3}-\d{2}-\d{2}/).required(),
        passport: yup.string().matches(/^([^0-9]*)$/).required(),
        series: yup.number().positive().integer().required(),
        number: yup.number().positive().integer().required(),
        whenGiven: yup.number().positive().integer().required(),
        monthsGiven: yup.number().positive().integer().required(),
        yearGiven: yup.number().positive().integer().required()
    });


    const { register, handleSubmit} = useForm({
        mode: "onBlur",
        resolver: yupResolver(schema)
    });
    const history = useHistory();
    const {currentStep} = data;
    
    const onSubmit = (data) => {
        const newData = {...data, currentStep: currentStep + 1};
        console.log(newData)
        setValues(newData);
        history.push('/step3');
    }

    return (
        <>
        <MainContainer step={1}></MainContainer>
        <MainContainer step={2}>
            <form noValidate onSubmit={handleSubmit(onSubmit)} className="form-about">
                <input id="lastName" type="text" name="lastName" ref={register} />
                <label htmlFor="lastName">
                    <span className="form-about__label">Фамилия</span>
                </label>
                <input id="firstName" type="text" name="firstName" ref={register} />
                <label htmlFor="firstName">
                    <span className="form-about__label">Имя</span>
                </label>
                <input id="middleName" type="text" name="middleName" ref={register} />
                <label htmlFor="middleName">
                    <span className="form-about__label">Отчество</span>
                </label>
                <input id="email" type="email" name="email" ref={register} />
                <label htmlFor="email">
                    <span className="form-about__label">Email</span>
                </label>
                <input id="phone" type="tel" name="phone" ref={register} />
                <label htmlFor="phone">
                    <span className="form-about__label">Телефон</span>
                </label>
                <p className="form-about__document">Документ, удостоверяющий личность</p>
                <input id="passport" type="text" name="passport" ref={register} />
                <label htmlFor="passport">
                    <span className="form-about__label">Документ</span>
                </label>
                <input id="series" type="number" name="series" ref={register} />
                <label htmlFor="series">
                    <span className="form-about__label">Серия</span>
                </label>
                <input id="number" type="number" name="number" ref={register} />
                <label htmlFor="number">
                    <span className="form-about__label">Номер</span>
                </label>
                <input id="whenGiven" type="number" name="whenGiven" ref={register} />
                <label htmlFor="whenGiven">
                    <span className="form-about__label">Когда выдан</span>
                    <span className="form-about__label">День</span>
                </label>
                <input id="monthsGiven" type="number" name="monthsGiven" ref={register} />
                <label htmlFor="monthsGiven">
                    <span className="form-about__label">Месяц</span>
                </label>
                <input id="yearGiven" type="number" name="yearGiven" ref={register} />
                <label htmlFor="yearGiven">
                    <span className="form-about__label">Год</span>
                </label>
                <PrimaryButton>Продолжить</PrimaryButton>
            </form>
        </MainContainer>
        <MainContainer step={3}></MainContainer>
        </>
    );
}