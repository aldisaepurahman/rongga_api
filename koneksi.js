/*var mysql = require('mysql');

//create db connection
const conn = mysql.createConnection({
    host:'127.0.0.1',
    user:'noncogni_rongga',
    password:'semogasukses',
    database:'noncogni_rongga_db'
});

conn.connect((err)=>{
    if (err) throw err;
    console.log('Mysql Connect');
});

module.exports = conn;*/

module.exports = function () {

    let mysql = require('mysql');

    //Establish Connection to the DB
    let connection = mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'',
        database:'rongga_db'
    });

    //Instantiate the connection
    connection.connect(function (err) {
        if (err) {
            console.log(`connectionRequest Failed ${err.stack}`);
        } else {
            console.log(`DB connectionRequest Successful ${connection.threadId}`);
        }
    });

    //return connection object
    return connection;
}