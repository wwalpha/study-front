export const isEmpty = value => (value === undefined || value === null || value === '');

export const isNotEmpty = value => !isEmpty(value);
