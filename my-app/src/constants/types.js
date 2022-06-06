const createType = (prefix) => (type = "") => `${prefix}-${type}`;

const configType = createType("CONFIG");

export const CONFIG_TYPES = {
    SET_JWT_TOKEN: configType("SET_JWT_TOKEN")
}