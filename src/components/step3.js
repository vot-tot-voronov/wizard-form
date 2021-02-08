import React from 'react';

import {MainContainer} from './maincontainer';
import {PrimaryButton} from './primaryButton';
import {useForm} from 'react-hook-form';
import {useHistory} from 'react-router-dom';

import {useData} from '../DataContext';
import Swal from 'sweetalert2';

export const Step3 = () => {
    const {data, setValues} = useData();
    const { register, handleSubmit, watch} = useForm({
        defaultValues: {
            agreeWithRules: data.agreeWithRules,
            notificated: data.notificated
        }
    });

    const wereChecked = watch(['agreeWithRules', 'notificated']);
    console.log("wereChecked", wereChecked);

    const history = useHistory();

    
    const {currentStep} = data;
    
    const onSubmit = (data) => {
        const newData = {...data, currentStep: currentStep + 1};
        Swal.fire(
            'Успех!',
            'Ваша форма успешно отправлена!',
            'success'
        );
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
                    ref={register({required: true})}
                />
                <label htmlFor="agreeWithRules">
                    <span className="form-agree__label">Согласен</span>
                </label>
                <input id="notificated" type="checkbox" value="notificated" name="notificated" 
                    ref={register({required: true})}
                />
                <label htmlFor="notificated">
                    <span className="form-agree__label">Уведомлен</span>
                </label>
                <PrimaryButton>Отправить</PrimaryButton>
            </form>
        </MainContainer>
        </>
    );
}