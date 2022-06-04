
function Header() {
    return(
        <header className="header">
            <div className="container">
                <div className="header__block">
                    <div className="header__logo">Questor?</div>
                    <div className="header__button-quest">quests</div>
                    <input type="text"
                        className="header__search"
                        placeholder="search the quest"/>
                    <div className="header-btn">
                        <div className="header-btn__sign-in">Sign in</div>
                        <div className="header-btn__register">Register</div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;