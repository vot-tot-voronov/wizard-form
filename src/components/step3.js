import React from 'react';

import {MainContainer} from './maincontainer';
import {PrimaryButton} from './primaryButton';
import {useForm} from 'react-hook-form';
import {useHistory} from 'react-router-dom';

import {useData} from '../DataContext';

export const Step3 = () => {
    const { register, handleSubmit, errors, watch} = useForm();
    const history = useHistory();

    const {data, setValues} = useData();
    console.log(data);
    const onSubmit = (data) => {
        setValues(data);
        history.push('/result');
    }

    return (
        <>
        <MainContainer currentStep={"1"}></MainContainer>
        <MainContainer currentStep={"2"}></MainContainer>
        <MainContainer currentStep={"3"}>
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