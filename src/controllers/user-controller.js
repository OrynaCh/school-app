const dbMethods = require("../db/db-methods");
const jwt = require('jsonwebtoken');
exports.login = async (req, res) => {
    try {
        const user = await dbMethods.findUser(req.body);
        if (!user) {
            return res.status(400).send(JSON.stringify({
                success: false,
                message: "no such user exists"
            }));
        }
        const token = jwt.sign({
                userId: user._id
            },
            'secret_for_chatBots', {
                expiresIn: '24h'
            });
        res.status(200).json({
            userId: user._id,
            token: token
        });
    } catch (err) {
        console.log("error happened when trying to authorize user " + JSON.stringify(err));
        res.status(500).send(JSON.stringify({
            error: "error happened when trying to authorize user"
        }));
    };
}