import ResultQuestModal from "../modals/ResultQuestModal";

const ResultQuest = () => {
    return(
        <main>
            <section className="result-quest">
                <div className="container">
                    <h2 className="result-quest__title">Ви закінчили квест та можете подивитися свій результат</h2>
                    <ResultQuestModal />
                </div>
            </section>
        </main>
    )
}

export default ResultQuest;