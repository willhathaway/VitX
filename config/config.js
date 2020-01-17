module.exports = {
  "development": {
    "username": "root",
    "password": "password",
    "database": "blazedb",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "production": {
    "use_env_variable": "mysql://svf8wk563hqie0b7:wlfj2quu9nk9b4cc@nba02whlntki5w2p.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/h127jixfkwfe99nh"
  }
}