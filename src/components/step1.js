import React from 'react';

import {MainContainer} from './maincontainer';
import {PrimaryButton} from './primaryButton';
import {useForm} from 'react-hook-form';
import {useHistory} from 'react-router-dom';

import {useData} from '../DataContext';

export const Step1 = () => {
    const { register, handleSubmit} = useForm();
    const history = useHistory();

    const {data, setValues} = useData();
    console.log(data);
    const onSubmit = (data) => {
        setValues(data);
        history.push('/step2');
    }

    return (
        <>
        <MainContainer currentStep={"1"}>
            <form onSubmit={handleSubmit(onSubmit)} className="form-status">
                <input id="individual" type="radio" value="individual" name="legalStatus" 
                    defaultChecked={true} ref={register({ required: true })}
                />
                <label htmlFor="individual">
                    <span className="form-status__label">Физическое лицо</span>
                    <span className="form-status__label form-status__label_sign">Константинов К. К.</span>
                </label>
                <input id="organization" type="radio" value="organization" name="legalStatus" 
                    ref={register({ required: true })}
                />
                <label htmlFor="organization">
                    <span className="form-status__label">Юридическое лицо</span>
                    <span className="form-status__label form-status__label_sign">ООО Константиновский</span>
                </label>
                <PrimaryButton>Продолжить</PrimaryButton>
            </form>
        </MainContainer>
        <MainContainer currentStep={"2"}></MainContainer>
        <MainContainer currentStep={"3"}></MainContainer>
        </>
    );
}