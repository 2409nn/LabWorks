import { useState } from "react"

const ToggleBtn = (props) => {

    const { children } = props;

    const [ isActive, setActive ] = useState(false);

    return (
        <button onClick={ () => { setActive(!isActive); console.log(isActive) } } className="toggle-btn">
            {children}
        </button>
    )
}

export default ToggleBtn