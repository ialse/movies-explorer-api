const corsOptions = {
  origin: [
    "http://ialse-movies.students.nomoredomains.rocks",
    "http://www.ialse-movies.students.nomoredomains.rocks",
    "http://api.ialse-movies.students.nomoredomains.rocks",
    "http://www.api.ialse-movies.students.nomoredomains.rocks",
    "https://ialse-movies.students.nomoredomains.rocks",
    "https://www.ialse-movies.students.nomoredomains.rocks",
    "https://api.ialse-movies.students.nomoredomains.rocks",
    "https://www.api.ialse-movies.students.nomoredomains.rocks",
    "http://localhost:3000",
    "http://localhost:3001",
    "http://127.0.0.1:3000",
  ],
  methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
  preflightContinue: false,
  optionsSuccessStatus: 204,
  allowedHeaders: ["Content-Type", "origin", "x-access-token"],
  credentials: true,
};

module.exports = { corsOptions };
