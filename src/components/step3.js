import React from 'react';

import {MainContainer} from './maincontainer';
import {PrimaryButton} from './primaryButton';
import {useForm} from 'react-hook-form';
import {useHistory} from 'react-router-dom';

import {useData} from '../DataContext';

export const Step3 = () => {
    const { register, handleSubmit, watch} = useForm();
    const history = useHistory();

    const {data, setValues} = useData();
    const {currentStep} = data;
    
    const onSubmit = (data) => {
        const newData = {...data, currentStep: currentStep + 1};
        console.log(newData)
        setValues(newData);
        history.push('/result');
    }

    return (
        <>
        <MainContainer step={1}></MainContainer>
        <MainContainer step={2}></MainContainer>
        <MainContainer step={3}>
            <form onSubmit={handleSubmit(onSubmit)} className="form-agree">
                <input id="agreeWithRules" type="checkbox" value="agree" name="agreeWithRules" 
                    ref={register({ required: true })}
                />
                <label htmlFor="agreeWithRules">
                    <span className="form-agree__label">Физическое лицо</span>
                </label>
                <input id="notificated" type="checkbox" value="notificated" name="notificated" 
                    ref={register({ required: true })}
                />
                <label htmlFor="notificated">
                    <span className="form-agree__label">Юридическое лицо</span>
                </label>
                <PrimaryButton>Отправить</PrimaryButton>
            </form>
        </MainContainer>
        </>
    );
}