import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

let users = [{ username: 'admin', password: 'password' }];
let loggedInUser = null;

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username && u.password === password);
  if (user) {
    loggedInUser = user;
    return res.json({ message: 'Login successful', user });
  }
  res.status(401).json({ message: 'Invalid credentials' });
});

app.post('/logout', (req, res) => {
  loggedInUser = null;
  res.json({ message: 'Logged out' });
});

app.listen(5000, () => console.log('Backend running on port 5000'));