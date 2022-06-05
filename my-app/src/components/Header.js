import {useState} from "react"
import {Link} from "react-router-dom"
import className from "classnames"

function Header() {
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
                    <div className="header-btn">
                        <div className="header-btn__sign-in btn">Увійти до системи</div>
                        <div className="header-btn__register btn">Зареєструватися</div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;