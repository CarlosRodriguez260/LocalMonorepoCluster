var CREATE_TABLES = `
DROP TABLE IF EXISTS credentials;

CREATE TABLE credentials (
    id INTEGER PRIMARY KEY,
    first_name TEXT,
    last_name TEXT,
    email TEXT,
    password TEXT
);`

const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./database.db', (err)=>{
    if(err){
        console.error(err.message)
    } 
    console.log('Connected to DB')
})

db.exec(CREATE_TABLES)
db.close()
console.log("Tables dropped and updated!")