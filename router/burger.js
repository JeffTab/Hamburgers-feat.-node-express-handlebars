const router = require('express').Router();

const { selectAll, insertOne, updateOne, devourOne } = require('../controllers/burger_controllers');

router.get('/', (req, res) => {
    selectAll()
        .then(burgerdata => {
            res.render('home', { burgers: burgerdata });
        })
        .catch(err => {
            res.status(500).end();
        });
});

router.get('/burgers', (req, res) => {
    selectAll()
        .then(burgerdata => {
            res.status(200).json(burgerdata);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

router.post('/burgers', (req, res) => {
    insertOne(req.body)
        .then(burgerdata => {
            res.status(200).json(burgerdata);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

router.put('/burgers/:id', (req, res) => {
    updateOne(req.body, req.params.id)
        .then(burgerdata => {
            if (burgerdata.code === 404) {
                return res.status(404).json(burgerdata);
            }
            res.status(200).json(burgerdata);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

router.delete('/burgers/:id', (req, res) => {
    devourOne(req.params.id)
        .then(burgerdata => {
            if (burgerdata.code === 404) {
                return res.status(404).json(burgerdata);
            }

            res.status(200).json(burgerdata);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

module.exports = router;
