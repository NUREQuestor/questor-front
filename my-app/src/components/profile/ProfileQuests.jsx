import { useNavigate } from "react-router-dom";

const ProfileQuests = ({quests}) => {
    const navigate = useNavigate();
    return(
        <div className="quests-block" onClick={() => navigate("/start_quest_introduction") }>
            {quests && quests?.map((quest) => <div className="quest-block" key={quest.id}>
                <p className="quest-block__text">{quest.name}</p>
                <h3 className="quest-block__title">{quest.description}</h3>
            </div>)
            }
        </div>
    )
}

export default ProfileQuests