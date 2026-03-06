export const QUERY_STRING_GET_USER_BY_ID = 'SELECT * FROM users WHERE id = $1';

export const QUERY_STRING_REGISTRATION_USER = 'INSERT INTO users VALUES ($1, $2, $3, $4, $5, $6)';

export const QUERY_STRING_INCREMENT_NUMBER_OF_JOKES = 'UPDATE users SET number_of_jokes = number_of_jokes + 1 WHERE id= $1';
