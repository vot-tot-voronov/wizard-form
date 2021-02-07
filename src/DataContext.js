import React, { createContext, useState, useContext } from 'react';

const DataContext = createContext();

export const DataProvider = ({children}) => {
    const [data, setData] = useState({currentStep: 1});

    const setValues = (values) => {
        setData(prevData => {
            return {
                ...prevData,
                ...values
            }
        });
    };

    return (
        <DataContext.Provider value={{data, setValues}}>
            {children}
        </DataContext.Provider>
    );
};

export const useData = () => useContext(DataContext);