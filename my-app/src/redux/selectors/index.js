export const getUser = (state) => state.user;
export const getConfigUserId = (state) => state.config.id;
export const getConfigCreatedQuestId = (state) => state.config.idCreatedQuest;
export const getConfigCreatedQuestionId = (state) => state.config.idCreatedQuestion;

export const getConfigSettingsCreatedQuestion = (state) => state.config.settingsCreatedQuestion;
export const getConfigQuestResult = (state) => state.config.questResult;

export const getCreatedQuests = (state) => state.createdQuests;
export const getCompletedQuests = (state) => state.completedQuests;
export const getPublicQuestsWithSearch = (search = "") => (state) => state.publicQuests?.filter(({name}) => name.toLowerCase().includes(search.toLowerCase())) || [];
export const getQuest = (state) => state.quest;

export const getCreatedQuestions = (state) => state.config.createdQuestions || [];
export const getConfigSettingsCreatedQuest = (state) => state.config.settingsCreatedQuest;