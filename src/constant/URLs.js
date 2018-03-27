const { API_HOST } = process.env;

export const USERS_URL = `${API_HOST}/users`;
export const USER_PROPS_URL = user => `${API_HOST}/${user}/props`;
