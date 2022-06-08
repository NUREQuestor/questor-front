import {Link} from "react-router-dom"

import SignInModal from "./modals/SignInModal"
import RegistrationModal from "./modals/RegistrationModal"
import SelectLocalization from "./SelectLocalization"
import { useSelector } from "react-redux";
import { getUser } from "../redux/selectors";

const Header = () => {
    const user = useSelector(getUser);

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
                            <Link to="/first_step_create" className="header__create-quest btn" >Створити квест</Link>
                            <Link to="/profile" className="header__profile btn">Профіль</Link>
                            <div className="header__log-out btn">Вийти</div>
                        </>
                        )
                        : (<div className="header-btn">
                            <SignInModal />
                            <RegistrationModal />
                        </div>)
                    }
                </div>
            </div>
        </header>
    )
}

export default Header;