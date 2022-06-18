const createType = (prefix) => (type = "") => `${prefix}_${type}`; 
 
const configType = createType("CONFIG"); 
 
export const CONFIG_TYPES = { 
    SET_JWT_TOKEN: configType("SET_JWT_TOKEN"), 
    SET_CONFIG: configType("SET_CONFIG"), 
    SIGN_IN: configType("SIGN_IN"), 
    REGISTER: configType("REGISTER"), 
    CLEAR: configType("CLEAR") 
} 
 
const userType = createType("USER"); 
 
export const USER_TYPES = { 
    SET: userType("SET"), 
    ME: userType("ME"), 
    REMOVE: userType("REMOVE"), 
    SIGN_OUT: userType("SIGN_OUT"), 
    EDIT: userType("EDIT"), 
    EDIT_PASSWORD: userType("EDIT_PASSWORD") 
} 
 
const questType = createType("QUEST"); 
 
export const QUEST_TYPES = { 
    CREATE: questType("CREATE") 
} 
 
const questionType = createType("QUESTION"); 
 
export const QUESTION_TYPES = { 
    CREATE: questionType("CREATE") 
} 
 
const answerType = createType("ANSWER"); 
 
export const ANSWER_TYPES = { 
    CREATE_MANY: answerType("CREATE_MANY") 
} 
 
const createdQuestsType = createType("CREATED_QUESTS"); 
 
export const CREATED_QUESTS_TYPES = { 
    SET: createdQuestsType("SET"), 
    GET: createdQuestsType("GET"),
    CLEAR: createdQuestsType("CLEAR")
}