const admin = require('./firebase-config.js')

class AuthMiddleware {
    async decodeToken(req,res,next) {
        const token = req.headers.authorization.split(" ")[1] || "noToken";
        // console.log(admin);
        try {
            const decodeValue = await admin.auth().verifyIdToken(token);
            if(decodeValue){
                return next(req,res);
            } else {
                return res.sendStatus(401);
            }
        } catch (err) {
            // console.log("caught error!", err);
            return res.status(500).send("firebase auth error!");
        }
    }
}

module.exports = new AuthMiddleware();


