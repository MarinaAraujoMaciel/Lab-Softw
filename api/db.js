import mysql from "mysql"

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "P$f130",
    database: "crud",
    port: "3366"
});


db.connect((err) => {
    if (err) {
        console.error('Erro ao conectar:', err.stack);
        return;
    }
    console.log('Conexão bem-sucedida');
});