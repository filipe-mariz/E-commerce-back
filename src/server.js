//import 'dotenv';
const express = require('express')
import express from 'express';

const app = express();

app.listen(process.env.PORT, ()=> console.log('Server is run'));