import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => 
    res.send(`Node and express server is running on port ${PORT}`)
);

app.listen(PORT, ()=>
    console.log(`Your server is runnning on port ${PORT}`)
);