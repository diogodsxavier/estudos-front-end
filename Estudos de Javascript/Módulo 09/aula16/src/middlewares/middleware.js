exports.middlewareGlobal = (req, res, next) => {
    res.locals.umaVariavelGlobal = 'Este é o valor da varialvel local.';
    next();
};

exports.outroMiddleware = (req, res, next) => {
    next();
};