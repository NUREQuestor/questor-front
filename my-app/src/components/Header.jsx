import {Link} from "react-router-dom"
import className from "classnames"

import FirstStep from "./modals/createQuest/FirstStep"
import SignIn from "./modals/SignIn"
import Registration from "./modals/Registration"
import SelectLocalization from "./SelectLocalization"
import { useSelector } from "react-redux";
import { getUser } from "../redux/selectors";

const Header = () => {
    const user = useSelector(getUser);

    const listAvailableQuests = className(
        "header__button-quest"
    )

    return(
        <header className="header">
            <div className="container">
                <div className="header__block">
                    <Link to="/" className="header__logo">Questor?</Link>
                    <input type="text"
                        className="header__search"
                        placeholder="пошук квеста"/>

                    <SelectLocalization />

                    {!user.id 
                    ? ( <>
                            <FirstStep />
                            <Link to="/profile" className="header__profile btn">Профіль</Link>
                            <div className="header__log-out btn">Вийти</div>
                        </>
                        )
                        : (<div className="header-btn">
                            <SignIn />
                            <Registration />
                        </div>)
                    }
                </div>
            </div>
        </header>
    )
}

export default Header;