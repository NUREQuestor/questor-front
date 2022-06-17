import {Link} from "react-router-dom"

import { useSelector } from "react-redux";
import { getUser } from "../../redux/selectors";

import avatar from "../../resources/avatar.png"
import ProfileQuests from "./ProfileQuests"

const Profile = () => {
    const user = useSelector(getUser);

    return(
        <main>
            <section className="profile">
                <div className="container">
                    <div className="profile__block">
                        <img className="profile__avatar" src={avatar} />
                        <div className="profile__info">
                            <h3 className="profile__name info">{user.userName}</h3>
                            <h3 className="profile__email info">{user.email}</h3>
                            <h3 className="profile__quantity info">Завершені квести: 1</h3>
                            <Link to="/edit" className="profile__settings btn">Налаштування</Link>
                        </div>
                    </div>
                    <h2 className="profile__title">Останні виконані завдання:</h2>

                    <ProfileQuests />

                    <h2 className="profile__title">Створені квести</h2>

                    <ProfileQuests />
                </div>
            </section>
        </main>
    )
}

export default Profile