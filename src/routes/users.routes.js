const {Router} = require('express');
const { sendFile, viewFiles, sendReport, deleteFile, profile } = require('../controllers/users');
const router = Router();

router.get('/', (req, res) => {
    res.send(`El ayuyu :'v!!`)
})

router.post('/sendFile', sendFile);
router.get('/viewFile', viewFiles);
router.post('/sendReport', sendReport);
router.delete('/deleteFile', deleteFile);
router.get('profile', profile);

module.exports = router