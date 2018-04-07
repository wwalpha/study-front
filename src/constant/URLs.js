const { API_URL } = process.env;

export const USERS_URL = `${API_URL}/users`;
export const USER_PROPS_URL = user => `${API_URL}/${user}/userprops`;
export const NEXT = user => mode => `${API_URL}/${user}/${mode}/nextpage`;
export const SAVE = user => mode => `${API_URL}/${user}/${mode}/save`;
