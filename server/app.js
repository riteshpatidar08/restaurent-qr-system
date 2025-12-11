import express from 'express';
import dbConnect from './config/database.js';
import authRoutes from './routes/auth.route.js';
import cors from 'cors'
import TableRoutes from './routes/table.route.js'
import verifyToken from './middlewares/verifyToken.js';
import checkRole from './middlewares/checkRole.js';
import sessionRoutes from './routes/session.route.js'
import menuRoutes from './routes/menu.route.js'
import dotenv from 'dotenv' ;
import cartRoutes from './routes/cart.route.js'
dotenv.config() ;
const app = express();
app.use(cors({
  origin : ['http://localhost:5173','http://localhost:5174'],
  
}))
//NOTE fn used for mongodb connection
dbConnect();
app.use(express.json())
app.get('/', (req, res) => {
  res.send('THIS IS MY HOMEPAGE');
});

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1' ,TableRoutes ) ;
app.use('/api/v1' , sessionRoutes);
app.use('/api/v1' , menuRoutes);
app.use('/api/v1' , cartRoutes)

// app.get('/qr' ,(req,res)=>{
//   res.download()
// })
//here we placed the global error handleer => 
  app.use((err,req,res,next)=>{
    if(err){
      //TODO here you have to create a log file and call the logger.error method to save the information regarding every error you get in this project
      res.status(err.status || 500).json({
        messsage : err?.message || 'server error'
      })
    }
  })


  
app.listen(3000, () => {
  console.log(`Server is running on 3000`);
});
 


//git init
//git status
//git add
//git commit
//git push

//branches ? local repo ? remote repo ?

//GIT AND GITHUB

//GIT => VERSION CONTROL SYSTEM

//resume.pdf => //edit => resume_1.pdf

//resume.pdf => resume_1.pdf

//GIT => local machine => specific folder => project 4.0

// =>GIT COMMIT => VERSIOn

//setup + tailwind version_1
//user + table version _ 2

// user + table version => refresh token
