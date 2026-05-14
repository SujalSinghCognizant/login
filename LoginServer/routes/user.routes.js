const express=require('express');
const router=express.Router();
const {authControllerLogin,authControllerSignUp}=require('../controllers/auth.controller');
router.post('/login',authControllerLogin);
router.post('/signUp',authControllerSignUp); 
module.exports=router;