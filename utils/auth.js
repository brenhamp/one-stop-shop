// protecting routes using middleware - if user is authenticated

const autho = (req, res, next) => {
    if(!req.session.user_id) {
        res.direct('/homepage');
    } else {
        next();
    }
};

module.exports = autho;