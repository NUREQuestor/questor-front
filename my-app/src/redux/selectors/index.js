export const getUser = (state) => state.user;
export const getConfigUserId = (state) => state.config.id;
export const getConfigCreatedQuestId = (state) => state.config.idCreatedQuest;
export const getConfigCreatedQuestionId = (state) => state.config.idCreatedQuestion;

export const getConfigSettingsCreatedQuestion = (state) => state.config.settingsCreatedQuestion;

export const getCreatedQuests = (state) => state.createdQuests;
export const getPublicQuestsWithSearch = (search = "") => (state) => state.publicQuests?.filter(({name}) => name.includes(search)) || [];
export const getQuest = (state) => state.quest;