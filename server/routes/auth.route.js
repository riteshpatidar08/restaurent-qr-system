import express from 'express' ;
import { Login, refresh, register, searchAccount } from '../controllers/auth.controller.js';
import SessionTokenVerfiy from '../middlewares/SessionTokenVerfiy.js';
import verifyToken from '../middlewares/verifyToken.js';
const router = express.Router() ;

router.post('/register',register )
router.post('/login',Login )
router.post('/search-account', searchAccount)
//forget password api for sending mail to user => frontend usser => ui reset password with fields
//reset password => api will be call the fetch your data from databse and upadte the password field with new password

router.post('/convert' , SessionTokenVerfiy , (req,res)=>{
    console.log(req.session)
    // const session = req.session ;
    // session.convertedSession = true ;
    // await session.save()
})

router.post('/refresh' ,   refresh)


export default router


//auth.controller  + auth.route => app.js


//pending task karlo 
// kal properly coupan api intergate 


// NOTE XLOCAL TOKEN => access token , refresh token , session token => migration => cookie infeature 
//NOTE UI => accesstoken ,refresh token , mail , cloudinary , role based access , rbac  , guest work , session token  ,cookie , cors 





