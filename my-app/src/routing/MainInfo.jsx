import { useTranslation } from 'react-i18next';

const CreateQuest = () => {
    const { t } = useTranslation();
    return(
        <main>
            <section>
                <div className="container">
                    <div className="main-info">
                        <h1 className="main-info__title">
                            {t("MainPageInfoFirst")} <br /> {t("MainPageInfoSecond")}
                        </h1>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default CreateQuest