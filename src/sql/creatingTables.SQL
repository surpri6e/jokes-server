create table NotAdminAccessedJokes(
    text TEXT NOT NULL,
    dateOfCreate DATE NOT NULL,
    author VARCHAR(255) NOT NULL,
    adminAccess BOOLEAN NOT NULL,
    rating INT NOT NULL,
    name TEXT NOT NULL,
    linkOnImage TEXT,
    id SERIAL PRIMARY KEY NOT NULL
);

create table AdminAccessedJokes(
    text TEXT NOT NULL,
    dateOfCreate DATE NOT NULL,
    author VARCHAR(255) NOT NULL,
    adminAccess BOOLEAN NOT NULL,
    rating INT NOT NULL,
    name TEXT NOT NULL,
    linkOnImage TEXT,
    id SERIAL PRIMARY KEY NOT NULL
);

create table Users(
    name TEXT NOT NULL,
    telegramId INT NOT NULL,
    isBanned BOOLEAN NOT NULL,
    id SERIAL PRIMARY KEY NOT NULL
);