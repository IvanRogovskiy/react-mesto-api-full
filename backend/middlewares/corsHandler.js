module.exports.corsAccessHandler = (req, res, next) => {
    const allowedCors = [
        'https://api.ivanrg.mesto.nomorepartiesxyz.ru',
        'http://api.ivanrg.mesto.nomorepartiesxyz.ru',
        'localhost:3000',
        'http://localhost:3001'
    ];
    const DEFAULT_ALLOWED_METHODS = "GET,HEAD,PUT,PATCH,POST,DELETE";

    const { origin } = req.headers;
    const { method } = req.headers;
    if (allowedCors.includes(origin)) {
        res.header('Access-Control-Allow-Origin', origin);
        res.header('Access-Control-Allow-Headers', 'authorization, content-type');
    }
    const requestHeaders = req.headers['access-control-request-headers'];
    if (method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', DEFAULT_ALLOWED_METHODS);
        res.header('Access-Control-Allow-Headers', requestHeaders);
        return res.end();
    }
    next();
}
