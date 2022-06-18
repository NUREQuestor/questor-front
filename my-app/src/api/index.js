import instance from "./instance";

export const login = async (data) => instance.post("/Authenticate/login", data)

export const register = async (data) => instance.post("/Authenticate/register", data)

export const getUser = async (data) => instance.get("/User", {
    params: data
})

export const editUser = async (id, data) => instance.post("/User/edit", { id, ...data });

export const editPasswordUser = async (id, data) => instance.post("/User/Change Pssword", {id, ...data});

export const createQuest = async (id, data) => instance.post("/Quest", {userId: id, ...data});

export const createQuestion = async (id, data) => instance.post("/Question", {questId: id, ...data});

export const createAnswer = async (id, data) => instance.post("/Answer", {questionId: id, ...data});

export const getCreatedQuests = async (id) => instance.get("/Quest/QuestByUserId", {
    params: {
        userId: id
    }
});