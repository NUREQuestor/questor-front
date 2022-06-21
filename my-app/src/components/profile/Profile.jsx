import {useEffect} from "react";  
import {Link} from "react-router-dom" 
 
import { useSelector, useDispatch } from "react-redux"; 
import { getUser, getCreatedQuests, getCompletedQuests } from "../../redux/selectors"; 
import { CREATED_QUESTS_TYPES, COMPLETED_QUESTS_TYPES } from "../../constants/types"; 
 
import avatar from "../../resources/avatar.png" 
import ProfileQuests from "./ProfileQuests" 
 
const Profile = () => { 
    const dispatch = useDispatch(); 
    const user = useSelector(getUser); 
    const createdQuests = useSelector(getCreatedQuests); 
    const completedQuests = useSelector(getCompletedQuests);
 
    useEffect(() => { 
        dispatch({type: CREATED_QUESTS_TYPES.GET}); 
        dispatch({type: COMPLETED_QUESTS_TYPES.GET}); 
    }, [user]) 
 
    return( 
        <main> 
            <section className="profile"> 
                <div className="container"> 
                    <div className="profile__block"> 
                        <img className="profile__avatar" src={avatar} /> 
                        <div className="profile__info"> 
                            <h3 className="profile__name info">{user.userName}</h3> 
                            <h3 className="profile__email info">{user.email}</h3> 
                            <h3 className="profile__quantity info">Завершені квести: {completedQuests.length}</h3> 
                            <Link to="/edit" className="profile__settings btn">Налаштування</Link> 
                        </div> 
                    </div> 
                    <h2 className="profile__title">Останні виконані завдання:</h2> 
 
                    <ProfileQuests quests={completedQuests} /> 
 
                    <h2 className="profile__title">Створені квести</h2> 
 
                    <ProfileQuests quests={createdQuests} isCreated /> 
                </div> 
            </section> 
        </main> 
    ) 
} 
 
export default Profile