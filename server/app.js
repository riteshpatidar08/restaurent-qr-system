import express from 'express';
import dbConnect from './config/database.js';
import authRoutes from './routes/auth.route.js';
import cors from 'cors'
import TableRoutes from './routes/table.route.js'
import verifyToken from './middlewares/verifyToken.js';
import checkRole from './middlewares/checkRole.js';
const app = express();
app.use(cors({
  origin : ['http://localhost:5173','http://localhost:5174'],
  
}))
//NOTE fn used for mongodb connection
dbConnect();
app.use(express.json())
app.get('/menu', verifyToken, checkRole(['customer', 'admin']), (req,res)=>{
// if(req.headers.authorization){
//   return res.send('you can access menu')
// }else {
//   return res.send('you are not authorized , please login')
// }
res.send('menu fetched')
})
app.get('/', (req, res) => {
  res.send('THIS IS MY HOMEPAGE');
});

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1' ,TableRoutes )

//here we placed the global error handleer => 
  app.use((err,req,res,next)=>{
    if(err){
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
