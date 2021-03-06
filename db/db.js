const mysql = require('mysql');

const con = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'stay',
  // port: '3306'
});

con.connect();


module.exports.get = {
  review: (query,callback) => {
    const host = Number(query)
    const inputMessage = "select customer.profile, customer.name, review.review_date, review.comments,review.rating_accuracy, review.rating_communication, review.rating_cleanliness, review.rating_location, review.rating_checkin, review.rating_value from review INNER JOIN stay on review.stay = stay.id INNER JOIN customer on stay.customer=customer.id where host= ? order by review.review_date desc"
    con.query(inputMessage, [host], (error, data) => {
      if (error) {
          callback(error,null)
      }
      callback(null,data)
    });
  },
}



