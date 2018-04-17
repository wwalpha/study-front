const { API_URL } = process.env;

export const USERS_URL = `${API_URL}/users`;
export const NEXT = userId => mode => `${API_URL}/${userId}/${mode}/nextpage`;
export const SAVE = userId => wordNo => `${API_URL}/${userId}/${wordNo}`;
export const RESET = userId => wordNo => `${API_URL}/${userId}/${wordNo}`;
