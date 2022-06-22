import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"
import { useTranslation } from 'react-i18next';

import SignInModal from "./modals/SignInModal";
import RegistrationModal from "./modals/RegistrationModal";
import SelectLocalization from "./SelectLocalization";
import { useSelector, useDispatch } from "react-redux";
import { getUser, getPublicQuestsWithSearch } from "../redux/selectors";
import { USER_TYPES, PUBLIC_QUESTS_TYPES } from "../constants/types";

const Header = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch()
    const user = useSelector(getUser);
    const [search, setSearch] = useState("");
    const publicQuests = useSelector(getPublicQuestsWithSearch(search));
    const navigate = useNavigate();

    const handleSignOut = () => dispatch({ type: USER_TYPES.SIGN_OUT });

    useEffect(() => {
        dispatch({type: PUBLIC_QUESTS_TYPES.GET});
    }, [!search.length])

    return(
        <header className="header">
            <div className="container">
                <div className="header__block">
                    <Link to="/" className="header__logo">Questor?</Link>
                    <div className="search-block">
                        <input 
                            className="search-block__input"
                            placeholder="search"
                            onChange={(e) => setSearch(e.target.value)}
                            value={search}
                            onKeyDown={(e) => {
                                if(e.key === "Enter") {
                                    navigate("/available_quests", {
                                        state: {
                                            search
                                        }
                                    })
                                    setSearch("");
                                }
                            }}
                        />
                        {search && <div className="search-block__result">
                            {publicQuests.map(({id, name}) => <p className="search-block__item" key={id} onClick={() => {
                                navigate(`/quest/${id}`);
                                setSearch("");
                            }}>{name}</p>)}
                        </div>}
                    </div>
                    <SelectLocalization />

                    {user.id
                    ? ( <>
                            <Link to="/first_step_create" state={{isCreate: true}} className="header__create-quest btn">{t("CreateQuest")}</Link>
                            <Link to="/profile" className="header__profile btn">{t("Profile")}</Link>
                            <div className="header__log-out btn" onClick={handleSignOut}>{t("Exit")}</div>
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