import express from 'express' ;
import { Login, register, searchAccount } from '../controllers/auth.controller.js';
const router = express.Router() ;

router.post('/register',register )
router.post('/login',Login )
router.post('/search-account', searchAccount)
//forget password api for sending mail to user => frontend usser => ui reset password with fields
//reset password => api will be call the fetch your data from databse and upadte the password field with new password
export default router


//auth.controller  + auth.route => app.js