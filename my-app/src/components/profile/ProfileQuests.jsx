import { useNavigate } from "react-router-dom";

const ProfileQuests = ({quests, isCreated}) => {
    const navigate = useNavigate();
    return(
        <div className="quests-block">
            {quests && quests?.map((quest, index) => {
                const maxPoint = quest?.questions?.reduce((accum, { pointsPerQuestion }) => accum + pointsPerQuestion, 0) || 0;

                return (
                    <div className="quest-block" key={`${quest.id}_${index}`}  onClick={isCreated ? () => navigate(`/quest/${quest.id}/preview`) : null }>
                        <p className="quest-block__text">{quest.name}</p>
                        <h3 className="quest-block__title">{quest.description}</h3>
                        {quest.questResult && <p>{maxPoint}/{quest.questResult.result}</p>}
                    </div>
                    )
                })
            }
        </div>
    )
}

export default ProfileQuests