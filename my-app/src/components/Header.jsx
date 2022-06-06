import {Link} from "react-router-dom"
import className from "classnames"

import SignIn from "./modals/SignIn"
import Registration from "./modals/Registration"
import SelectLocalization from "./SelectLocalization"

const Header = () => {

    const listAvailableQuests = className(
        "header__button-quest"
    )

    return(
        <header className="header">
            <div className="container">
                <div className="header__block">
                    <Link to="/" className="header__logo">Questor?</Link>
                    <Link to="/availableQuests" className={listAvailableQuests}>Веб-квести</Link>
                    <input type="text"
                        className="header__search"
                        placeholder="пошук квеста"/>

                    <SelectLocalization />

                    <div className="header-btn">

                        <SignIn />
                        <Registration />
                    
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;