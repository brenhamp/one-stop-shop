// protecting routes using middleware - if user is authenticated

const autho = (req, res, next) => {
    if(!req.session.user_id) {
        res.redirect('/homepage');
    } else {
        next();
    }
};

module.exports = autho;