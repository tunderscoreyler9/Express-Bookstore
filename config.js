// /** Common config for bookstore. */


// let DB_URI = `postgresql://`;

// if (process.env.NODE_ENV === "test") {
//   DB_URI = `${DB_URI}/books-test`;
// } else {
//   DB_URI = process.env.DATABASE_URL || `${DB_URI}/books`;
// }


// module.exports = { DB_URI };
const dotenv = require('dotenv');

dotenv.config();

const NODE_ENV = process.env.NODE_ENV || 'development';

let DB_URI, SECRET_KEY, BCRYPT_WORK_FACTOR;

if (NODE_ENV === 'test') {
  DB_URI = "postgresql:///books_test";
} else {
  DB_URI = process.env.DATABASE_URL || "postgresql:///books";
}

SECRET_KEY = process.env.SECRET_KEY;
BCRYPT_WORK_FACTOR = 12;

module.exports = {
  DB_URI,
  SECRET_KEY,
  BCRYPT_WORK_FACTOR
};