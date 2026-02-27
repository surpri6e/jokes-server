-- create table NotAdminAccessedJokes(
--     text TEXT NOT NULL,
--     dateOfCreate DATE NOT NULL,
--     author VARCHAR(255) NOT NULL,
--     adminAccess BOOLEAN NOT NULL,
--     rating INT NOT NULL,
--     name TEXT NOT NULL,
--     linkOnImage TEXT,
--     id SERIAL PRIMARY KEY NOT NULL
-- );

-- create table AdminAccessedJokes(
--     text TEXT NOT NULL,
--     dateOfCreate DATE NOT NULL,
--     author VARCHAR(255) NOT NULL,
--     adminAccess BOOLEAN NOT NULL,
--     rating INT NOT NULL,
--     name TEXT NOT NULL,
--     linkOnImage TEXT,
--     id SERIAL PRIMARY KEY NOT NULL
-- );

create table users(
    id SERIAL UNIQUE NOT NULL,

    created_at TEXT NOT NULL,
    username TEXT NOT NULL,

    number_of_jokes INT NOT NULL,
    number_of_likes INT NOT NULL,

    is_banned BOOLEAN NOT NULL
);