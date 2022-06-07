import {Link} from "react-router-dom"

import Quests from "./Quests"

const Profile = () => {
    return(
        <>
            <main>
                <section className="profile">
                    <div class="container">
                        <h3 className="profile__name">Ярослав</h3>
                        <h3 className="profile__surname">Цибух</h3>
                        <h3 className="profile__email">yaroslav@gmail.com</h3>
                        <h3 className="profile__quantity">Завершені квести: 1</h3>
                        <Link to="/edit" className="header__profile btn">Налаштування</Link>
                        <h2>Останні виконані завдання:</h2>

                        <Quests />

                        <h2>Створені квести</h2>

                        <Quests />
                    </div>
                </section>
            </main>
        </> 
    )
}

export default Profile