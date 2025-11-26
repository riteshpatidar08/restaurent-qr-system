import express from 'express'
import dbConnect from './config/database.js';

const app = express() ;
//NOTE fn used for mongodb connection
dbConnect()


app.get('/', (req,res)=>{
res.send("Homepage")
})

app.listen(3000, ()=>{
    console.log(`Server is running on 3000`)
})


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