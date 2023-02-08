const {Router} = require('express');
const { source, deleteDocuments, docs, users, home } = require('../controllers/admin');
const router = Router();

router.get('/source', source);
router.get('/home', home);
router.get('/users', users);
router.get('/docs', docs);
router.delete('/delete', deleteDocuments);

module.exports = router