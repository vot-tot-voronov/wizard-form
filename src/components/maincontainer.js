import React from 'react';

export const MainContainer = ({children, currentStep}) => {
    return (
        <div className="form-container" >
            <h2>Шаг {currentStep}</h2>
            {children}
        </div>
    );
};

