create table jokes(
    id SERIAL UNIQUE PRIMARY KEY NOT NULL,
    user_id INTEGER REFERENCES users(id) NOT NULL,
    created_at TEXT NOT NULL,

    name TEXT NOT NULL,
    text TEXT NOT NULL,
    author TEXT NOT NULL,

    number_of_likes INTEGER NOT NULL,

    is_admin_accessed BOOLEAN NOT NULL
);