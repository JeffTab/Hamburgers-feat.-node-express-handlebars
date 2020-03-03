const router = require('express').Router();

const { selectAll } = require('../../controllers/burger_controllers');

router.get('/', (req, res) => {
    selectAll()
        .then(burgerdata => {
            res.render('index', { burgers: burgerdata });
        })
        .catch(err => {
            res.status(500).end();
        });
});

module.exports = router;
