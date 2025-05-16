import express from 'express';
import mongoose, { connect } from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import connectToDB from './db/connect.js';

dotenv.config();


const app = express();
const PORT = process.env.PORT || 3000;



app.use(cors());
app.use(express.json());




app.get('/', (req, res) => {
  res.send('Welcome to the Social Media API');
});

app.get('/api/posts', (req, res) => {
  // Simulate fetching posts from a database
  const posts = [
    { id: 1, content: 'Hello World!' },
    { id: 2, content: 'Learning Node.js is fun!' },
  ];
  res.json(posts);
});

app.listen(PORT,()=>{
     connectToDB();
    console.log(`Server is running on port ${PORT}`);
})