npm init -y
npm i express sequelize pg
npm i --save-dev nodemon sequelize-cli
touch index.js

npx sequelize-cli init
this will create a project structure with sequelize index.js in models as well as a few other files for seqeulize


config file must be configured prior to creating db: 
    enter the db name of choice- prior to making it so it pulls the db name from the config file

    enter the server being used so it knows where to create it

    enter the dialect being used, in this case postgres

npx sequelize-cli db:create
this will create a db from the info in the config file

npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string
this will create a data model with the defined --name and --attributes

npx sequelize-cli db:migrate
this will create a migrate file

npx sequelize-cli seed:generate --name <insert table name>
this will create a file that you can enter data manually to seed with the next command-- be sure to seed the Table Name-- not the model file name. 

npx sequelize-cli db:seed:all
