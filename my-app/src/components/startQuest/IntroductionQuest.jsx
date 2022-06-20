import { useEffect, useMemo } from "react"; 
import { Button } from "@mui/material" 
import {useNavigate, useParams} from "react-router-dom"; 
import { useSelector, useDispatch } from "react-redux"; 
import { getQuest } from "../../redux/selectors"; 
import { QUEST_TYPES } from "../../constants/types" 
 
const IntroductionQuest = () => { 
    const dispatch = useDispatch(); 
    const navigate = useNavigate(); 
    const { id } = useParams(); 
    const quest = useSelector(getQuest);
    const countQuestions = quest?.questions?.length || 0;
    const maxPoint = useMemo(() => quest?.questions?.reduce((accum, { pointsPerQuestion }) => accum + pointsPerQuestion, 0) || 0, [quest])
 
    useEffect(() => { 
        dispatch({ type: QUEST_TYPES.GET, payload: { id } }); 
    }, [id]) 

    console.log(quest);
 
    if(!quest.id) {
        return <div>loading</div> 
    } 
 
    return( 
        <main> 
            <section className="introduction"> 
                <div className="container"> 
                    <h2 className="introduction__title">Данні про квест {quest.name}</h2> 
                    <p className="introduction__paragraph">{quest.description}</p> 
                    <p>Кількість питань {countQuestions}</p>
                    <p>Максимальна оцінка {maxPoint}</p>
                    <Button variant="contained" sx={{display: "block" , margin: "100px auto"}} onClick={() => navigate("/completion-quest", {
                        state: {
                            indexQuestion: 0,
                            mark: 0
                        }
                    })}>Почати</Button> 
                </div> 
            </section> 
        </main> 
    ) 
} 
 
export default IntroductionQuest