const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt');


function initalize(passport, getUserByEmail, getUserById) {
    const authoUser = async (email, password, done) => {
        const user = getUserByEmail(email)
        if (user == null) {
            return done(null, false, { message: 'No user with that email'})
        }

        try { 
            if (await.bcrypt.compare(password, user.password)) {
                return done(null, user)
            } else {
                return done(null, false, { message: 'Password incorrect' })
            }
        } catch (e) {
            return done(e)
        }
    }
    passport.use(new LocalStrategy({ usernameField: 'email' }, authoUser))
    passport.serializeUser((user, done) => done(null, user.id))
    passport.deserializUser((id, done) => {
       return done(null, getUserById(id))
     })
}

module.exports = initalize