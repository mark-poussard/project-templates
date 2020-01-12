import * as express from 'express';
import * as os from 'os';
import GetUsernameResponse from '../common/model/GetUsernameResponse';

const app = express();

app.use(express.static('dist'));
app.get('/api/getUsername', (req, res) => res.send(new GetUsernameResponse(os.userInfo().username)));

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));
