# movies-explorer-api

Бэкенд для дипломной работы, представляющей собой сайт с каталогом фильмов, которые можно сохранить к себе в избранное.
Представляет собой API:

GET /users/me  - возвращает информацию о пользователе (email и имя)  
PATCH /users/me - обновляет информацию о пользователе (email и имя)  
GET /movies -  возвращает все сохранённые пользователем фильмы  
POST /movies - создаёт фильм с переданными в теле полями  
DELETE /movies/movieId - удаляет сохранённый фильм по _id  

POST /signup - создаёт пользователя с переданными в теле  
POST /signin - проверяет переданные в теле почту и пароль и возвращает JWT  

#### Ссылки:
Бэкенд  https://api.movies-ialse.students.nomoredomains.rocks  
Фронтенд  https://movies-ialse.students.nomoredomains.rocks  
Фронтенд на гитхаб:  https://github.com/ialse/movies-explorer-frontend
