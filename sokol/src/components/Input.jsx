import { useState, useContext, createContext } from "react";

const Input = (props) => {

    const [value, setValue] = useState('');

    const InputContext = createContext('');

    const onChangeHandler = (e) => {
        setValue(e.target.value);
        console.log(e.target.value);
    }

    return (
        <>
            <InputContext.Provider value={value}>
                <input value={value} onChange={onChangeHandler} />
            </InputContext.Provider>

        </>
    )

}

export default Input;