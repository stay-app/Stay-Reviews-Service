/* insert stay (2700) fake data */
const mysql = require('mysql');

const con = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Student111!',
  database : 'stay'
});

con.connect();

for( let i=0; i <2700; i++) {
  let randomHost = Math.floor(Math.random()*100) + 1
  let randomCustomer = Math.floor(Math.random()*600) + 1

  const inputMessage = "INSERT INTO stay set ?";
  const option = {host:randomHost, customer:randomCustomer}

  con.query(inputMessage, option, (error, insertID) => {
    if (error) throw error;
    console.log(insertID)
  });
}

con.end();