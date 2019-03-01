const config = {
  port: 3001,

  // database
  database: {
    DATABASE: 'koa_demo',
    USERNAME: 'root',
    PASSWORD: 'password',
    PORT: 3306,
    HOST: 'localhost'
  },

  // cookie
  cookie: {
    maxAge: 3600 * 1000,
    expires: '',
    path: '',
    domain: '',
    httpOnly: true,
    secure: false,
    overwrite: true,
    signed: true
  }
}

module.exports = config;