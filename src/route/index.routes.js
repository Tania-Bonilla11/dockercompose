const {
    Router
} = require('express');
const router = Router();
const Integrant = require('../models/Integrantes');
router.get('/', (req, res) => {
    Integrant.find((err, integrantes) => {
        if (err) {
            return res.statusCode(400).json({
                err
            });
        }

        if (integrantes.length != 0) {
            res.render('index.ejs', {
                path: "Integrantes",
                integrantes
            });
        } else {
            const nombres = [{
                nombre: "Tania Alejandra Bonilla Alfaro"
            }, {
                nombre: "Cristina Fabiola Rivera Vargas"
            }, {
                nombre: "Arely Stephany Ramos Lemus"
            }];

            nombres.forEach(element => {
                const guardar = new Integrant(element);
                guardar.save((err) => {
                    if (err) {
                        console.error();
                        ("Error");
                    }
                });
            });

            Integrant.find((err, uss) => {
                if (err) {
                    return res.statusCode(400).json({
                        err
                    });
                }

                res.render('index.ejs', {
                    path: "Integrantes",
                    uss
                });
            });

        }
    });
});

module.exports = router;