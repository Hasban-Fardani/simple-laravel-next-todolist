# Simple TODO List Laravel + Next JS

simple CRUD todolist using laravel 11, Next JS 14.x and mysql database.

## Preview

## Installation
1. clone this repository
```bash
git clone http://this_repo_url.git
```

2. setup backend laravel and mysql
```bash
# assume that you currently on the root project
cd backend

composer install

cp .env.example .env 

php artisan key:generate

php artisan migrate --seed
```
then change the DB config in your .env file

3. setup frontend
```bash
cd frontend 

npm install

cp .env.example .env
```

4. run your backend and frontend in different terminal
```bash
cd backend
php artisan ser
```
in another terminal
```bash
cd frontend
npm run dev
```

## Routes 
### Backend
- **GET /api/todos**

  return all todos

- **GET /api/todos/<todoID>**
  
   return specific todo by id from route parameter

- **POST /api/todos**
  
  store new todo

- **PUT /api/todos/<todoID>**

  update todo by id

- **DELETE /api/todos/<todoID>**

  delete todo by id
  
## Acknowledge
- [Next.JS](https://nextjs.org/docs)
- [Laravel](https://laravel.com/)
