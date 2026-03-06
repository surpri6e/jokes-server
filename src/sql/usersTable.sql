create table users(
    id INTEGER UNIQUE PRIMARY KEY NOT NULL,
    created_at TEXT NOT NULL,
    
    username TEXT NOT NULL,

    number_of_jokes INT NOT NULL,
    number_of_likes INT NOT NULL,

    is_banned BOOLEAN NOT NULL
);
