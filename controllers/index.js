const { logger } = require("../utils/logger.util");

exports.responseToESP8266 = (req, res) => {
    try {
        const message = req.body.message;

        if (!message) 
            return res.status(200).send({
                status: 200,
                success: true,
                message: 'Must receive message from a client!'
            })

        logger('Logging client message . . .', 'action');
        logger(`${message}`, 'success');

        res.status(200).send({
            status: 200,
            success: true,
            message
        })
    } catch(err) {
        res.status(400).send({
            status: 400,
            success: false,
            message: err.message
        })
        logger('Something went wrong', 'failed');
    }
}