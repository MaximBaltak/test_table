## Настройка подключения к базе данных PostgreSql
Для того что бы подлючиться к базе данных надо прописать параметры базы данных в конфиге, для этого надо перейти
`config/database.config.json` и прописать следующие параметры: `user`, `password`,`port`,`host`,`database`

## Настройка веб-сервера
Для настройки веб-сервера надо прописать его параметры в конфиге, перейти в `config/server.config.json`
и прописать параметы `host`, `port`

## Запуск веб-сервера
Для запуска веб-сервера надо находясь в папке `server` прописать команду в командной строке `npm run server`