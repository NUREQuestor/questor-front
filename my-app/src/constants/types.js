const createType = (prefix) => (type = "") => `${prefix}_${type}`;

const configType = createType("CONFIG");

export const CONFIG_TYPES = {
    SET_JWT_TOKEN: configType("SET_JWT_TOKEN"),
    SIGN_IN: configType("SIGN_IN"),
    REGISTER: configType("REGISTER"),
}

const userType = createType("USER");

export const USER_TYPES = {
    SET: userType("SET")
}
