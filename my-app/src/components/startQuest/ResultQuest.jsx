import { useSelector } from "react-redux"; 
import { getConfigQuestResult } from "../../redux/selectors";
import { useTranslation } from 'react-i18next';

import ResultQuestModal from "../modals/ResultQuestModal";

const ResultQuest = () => {
    const { t } = useTranslation();
    const questResult = useSelector(getConfigQuestResult);

    return(
        <main>
            <section className="result-quest">
                <div className="container">
                    <h2 className="result-quest__title">{t("EndQuest")}</h2>
                    <ResultQuestModal mark={questResult.mark} />
                </div>
            </section>
        </main>
    )
}

export default ResultQuest;