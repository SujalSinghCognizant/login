const express=require('express');
const router=express.Router();
const {authControllerLogin}=require('../controllers/auth.controller');
router.post('/login',authControllerLogin);
router.post('/signUp',authControllerSignUp); 