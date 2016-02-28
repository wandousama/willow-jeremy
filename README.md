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
