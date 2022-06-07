import {Link} from "react-router-dom"

const Settings = () => {
    return(
        <main>
            <section>
                <div className="container">
                    <input type="text" placeholder="fda" />
                    <input type="text" placeholder="fda" />
                    <input type="text" placeholder="fda" />
                    <button type="button">Редагувати</button>
                    <Link to="/profile">Повернутися до профілю</Link>
                </div> 
            </section>
        </main>
    )
}

export default Settings