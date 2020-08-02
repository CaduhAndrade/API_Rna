const router = require('express-promise-router')();
const proteinsController = require('../controllers/protein.controller');

router.get('/proteins/', proteinsController.listAllProtein);
router.get('/proteins/:id', proteinsController.findProteinById);

module.exports = router;
