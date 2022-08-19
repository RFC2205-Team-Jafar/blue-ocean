const admin = require('./firebase-config')

class AuthMiddleware {
    async decodeToken(req,res,next) {
        const token = req.headers.authorization.split(" ")[1] || "noToken";

        try {
            const decodeValue = await admin.auth().verifyIdToken(token);
            if(decodeValue){
                return next(req,res);
            } else {
                return res.sendStatus(401);
            }
        } catch (err) {
            console.log(err);
            return res.sendStatus(500);
        }
    }
}

module.exports = new AuthMiddleware();


