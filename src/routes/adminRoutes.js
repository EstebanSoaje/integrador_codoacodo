const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController.js')

//Admin Routes:

router.get('/admin', adminController.admin);
router.get('/admin/create', adminController.createGet);
router.post('/admin/create', adminController.createPost);
router.get('/admin/edit/:id', adminController.editGet);
router.put('/admin/edit/:id', adminController.editPut);
router.delete('/admin/delete/:id', adminController.delete);

module.exports = router;
