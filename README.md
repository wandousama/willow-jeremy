# WandouSAMA&Anonymelon

## Setup

```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.0/install.sh | bash

source ~/.bashrc & source ~/.profile

nvm install v5.7.0

source ~/.bashrc & source ~/.profile

nvm alias default 5.7.0

npm install

npm start

```

visit http://localhost:5000/

init mongo data POST http://localhost:5000/users
get users data GET http://localhost:5000/

## Seed&Clear data

`node scripts/init_data.js`
`node scripts/clear_data.js`


## API need implement
1. GET /blogs?limit=3
2. GET /photos?limit=3
3. GET /photos?_id=56d3c6f094c43891b21173e5
4. POST /login
5. GET /uptoken

## API issue
6. POST /photos /blogs 无法保存image字段。  
