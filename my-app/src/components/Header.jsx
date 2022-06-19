import { Link } from "react-router-dom"

import SignInModal from "./modals/SignInModal"
import RegistrationModal from "./modals/RegistrationModal"
import SelectLocalization from "./SelectLocalization"
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../redux/selectors";
import { USER_TYPES } from "../constants/types"

const Header = () => {
    const dispatch = useDispatch()
    const user = useSelector(getUser);

    const handleSignOut = () => dispatch({ type: USER_TYPES.SIGN_OUT })

    return(
        <header className="header">
            <div className="container">
                <div className="header__block">
                    <Link to="/" className="header__logo">Questor?</Link>
                    <div className="search-block">
                        <input 
                            className="search-block__input"
                            placeholder="search"/>
                        <div className="search-block__result">
                            <p className="search-block__item">test1</p>
                            <p className="search-block__item">test2</p>
                        </div>
                    </div>
                    <SelectLocalization />

                    {user.id
                    ? ( <>
                            <Link to="/first_step_create" className="header__create-quest btn" >Створити квест</Link>
                            <Link to="/profile" className="header__profile btn">Профіль</Link>
                            <div className="header__log-out btn" onClick={handleSignOut}>Вийти</div>
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