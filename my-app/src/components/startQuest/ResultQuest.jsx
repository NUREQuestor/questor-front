import { useSelector } from "react-redux"; 
import { getConfigQuestResult } from "../../redux/selectors";

import ResultQuestModal from "../modals/ResultQuestModal";

const ResultQuest = () => {
    const questResult = useSelector(getConfigQuestResult);

    return(
        <main>
            <section className="result-quest">
                <div className="container">
                    <h2 className="result-quest__title">Ви закінчили квест та можете подивитися свій результат</h2>
                    <ResultQuestModal mark={questResult.mark} />
                </div>
            </section>
        </main>
    )
}

export default ResultQuest;