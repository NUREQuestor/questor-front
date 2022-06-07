import { useNavigate } from "react-router-dom";

const Quests = () => {
    const navigate = useNavigate();
    return(
        <div className="quests-block" onClick={() => navigate("/сreate-quest") }>
            <div className="quest-block">
                <p className="quest-block__text">Квест</p>
                <h3 className="quest-block__title">Назва</h3>
            </div>
            <div className="quest-block">
                <p className="quest-block__text">Квест</p>
                <h3 className="quest-block__title">Назва</h3>
            </div>
            <div className="quest-block">
                <p className="quest-block__text">Квест</p>
                <h3 className="quest-block__title">Назва</h3>
            </div>
        </div>
    )
}

export default Quests