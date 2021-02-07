import React from 'react';
import {useHistory} from 'react-router-dom';
import {useData} from '../DataContext';

export const MainContainer = ({children, step}) => {
    const history = useHistory();
    const {data, setValues} = useData();
    const {currentStep} = data;
    const goBackHandler = () => {
        if ((currentStep === 2 && step === 1) || (currentStep === 3 && step === 1)) {
            setValues({currentStep: step});
            history.push('/');
        } else if (currentStep === 3 && step === 2) {
            setValues({currentStep: step});
            history.push('/step2');
        }
    }
    return (
        <div className="form-container" >
            <h2 onClick={goBackHandler}>Шаг {step}</h2>
            {children}
        </div>
    );
};

