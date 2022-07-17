module.exports.corsHandler = (req, res, next) => {
    const allowedCors = [
        'https://api.ivanrg.mesto.nomorepartiesxyz.ru',
        'http://api.ivanrg.mesto.nomorepartiesxyz.ru',
        'localhost:3000'
    ]
    if (allowedCors.includes(origin))
    const { origin } = req.headers;
    res.header('Access-Control-Allow-Origin', origin);
    next();
}