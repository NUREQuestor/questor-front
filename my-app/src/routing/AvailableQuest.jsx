import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTranslation } from 'react-i18next';
import { getPublicQuestsWithSearch } from "../redux/selectors";


const AvailableQuest = () => {
    const { t } = useTranslation();
    const {state} = useLocation();
    const navigate = useNavigate();
    const publicQuests = useSelector(getPublicQuestsWithSearch(state.search));

    return(
        <main>
            <section className="available-quest">
                <div className="container">
                    <h2 className="available-quest__title">{t("QuestsAvailableOnRequest")} "{state.search}":</h2>
                    <div className="quests-block">
                        {publicQuests.map(({id, name, description}) => <div key={id} className="quest-block" onClick={() => navigate(`/quest/${id}`)}>
                            <p className="quest-block__text">{name}</p>
                            <h3 className="quest-block__title">{description}</h3>
                        </div>)}
                    </div>
                </div>
            </section>
        </main>
    )
}

export default AvailableQuest