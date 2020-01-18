//dependencies

require('dotenv').config();

//export

module.exports = {
    google: {
        clientID: process.env.CLIENTID,
        clientSecret: process.env.CLIENTSECRET
    },
    session: {
        cookieKey: "testest"
    }
}