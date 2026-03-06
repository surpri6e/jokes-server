export const QUERY_STRING_OFFER_JOKE =
    'INSERT INTO jokes (user_id, name, text, created_at, author, is_admin_accessed, number_of_likes) VALUES ($1, $2, $3, $4, $5, $6, $7)';

export const QUERY_STRING_GET_JOKE_BY_ID = 'SELECT * FROM jokes WHERE id = $1';

export const QUERY_STRING_GET_JOKES_BY_AUTHOR = "SELECT * FROM jokes WHERE author ILIKE '%$1%'";
export const QUERY_STRING_GET_JOKES_BY_NAME = "SELECT * FROM jokes WHERE name ILIKE '%$1%'";
export const QUERY_STRING_GET_JOKES_BY_USER_ID = 'SELECT * FROM jokes WHERE user_id = $1';
