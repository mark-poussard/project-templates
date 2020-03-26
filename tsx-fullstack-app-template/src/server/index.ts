import express from 'express';
import ServerStatus from '../common/model/ServerStatus';
import bodyParser from 'body-parser';

const app = express();

app.use(express.static('dist'));
app.use(bodyParser.json());
app.get('/api/status', (req, res) => res.send(new ServerStatus()));

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));

// KEEP LAST
app.get('*', (req,res) =>{
    res.sendFile('dist/index.html');
});