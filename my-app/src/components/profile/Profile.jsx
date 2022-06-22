import {useEffect} from "react";  
import {Link} from "react-router-dom" 
import { useTranslation } from 'react-i18next';
 
import { useSelector, useDispatch } from "react-redux"; 
import { getUser, getCreatedQuests, getCompletedQuests } from "../../redux/selectors"; 
import { CREATED_QUESTS_TYPES, COMPLETED_QUESTS_TYPES } from "../../constants/types"; 
 
import profile from "../../resources/profile.jpg"  
import ProfileQuests from "./ProfileQuests" 
 
const Profile = () => { 
    const { t } = useTranslation();
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
                        <img className="profile__avatar" src={profile} /> 
                        <div className="profile__info"> 
                            <h3 className="profile__name info">{t("Name")} {user.userName}</h3> 
                            <h3 className="profile__email info">{t("Email")} {user.email}</h3> 
                            <h3 className="profile__quantity info">{t("CompletedQuests")} {completedQuests.length}</h3> 
                            <Link to="/edit" className="profile__settings btn">{t("Settings")}</Link> 
                        </div> 
                    </div> 
                    <h2 className="profile__title">{t("LastCompletedTasks")}:</h2> 
 
                    <ProfileQuests quests={completedQuests} /> 
 
                    <h2 className="profile__title">{t("CreatingQuests")}</h2> 
 
                    <ProfileQuests quests={createdQuests} isCreated /> 
                </div> 
            </section> 
        </main> 
    ) 
} 
 
export default Profile