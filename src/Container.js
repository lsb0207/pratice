import {useState} from "react";
import Dropdown from "./Dropdown";
import './Container.css';
const Container = () => {
    const [isDropdownView, setDropdownView] = useState(false)

    const handleClickContainer = () => {
        setDropdownView(!isDropdownView)
    }

    const handleBlurContainer = () => {
        setTimeout(() => {
            setDropdownView(false)
        }, 200);
    }


    return (
        <div className="container" onBlur={handleBlurContainer}>
            <label onClick={handleClickContainer}>
                <button className="DropBox">Dropdown Menu{isDropdownView ? '▲' : '▼'}</button>
            </label>
            {isDropdownView && <Dropdown /> }
        </div>
    )
}

export default Container;