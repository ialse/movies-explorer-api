# Movies Explorer. Бэкенд

## Ссылка на проект: https://movies-ialse.students.nomoredomains.rocks

Бэкенд для дипломной работы, представляющей собой сайт с каталогом фильмов, которые можно сохранить к себе в избранное.
Представляет собой API:

GET /users/me - возвращает информацию о пользователе (email и имя)  
PATCH /users/me - обновляет информацию о пользователе (email и имя)  
GET /movies - возвращает все сохранённые пользователем фильмы  
POST /movies - создаёт фильм с переданными в теле полями  
DELETE /movies/movieId - удаляет сохранённый фильм по \_id

POST /signup - создаёт пользователя с переданными в теле  
POST /signin - проверяет переданные в теле почту и пароль и возвращает JWT

- Авторизация реализована на cookies: пользователю достаточно один раз авторизоваться, чтобы при повторном открытии сайта заходить на личные страницы. Внутренние роуты защищены для неавторизованных пользователей.
- Пароль хранится в виде хэша
- Реализована превалидация на celebrate перед передачей данных в контроллеры
- Реализована централизованная обработка ошибок. При любой ошибке API возвращается понятный ответ. Все обработчики завершаются catch
- Реализовано логирование
- Установлено ограничение на кол-во запросов с одного IP
- Бэкенд задеплоен на виртуальный сервер cloud.yandex.ru . ОС - Ubuntu 18.04. Был настроен nginx, выпущены сертификаты для защищенного соединения, настроена бесперебойная работа приложения.

### Стэк

Node.js + Express.js + mongoose + MongoDB
Для тестирования запросов использовался Postman.

#### Ссылки:

Бэкенд https://api.movies-ialse.students.nomoredomains.rocks  
Фронтенд на гитхаб: https://github.com/ialse/movies-explorer-frontend
