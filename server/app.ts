import * as express from 'express';
import { Route } from './controllers/index';
const app = express();

app.get('/test', Route.Index.get);
app.get('/', (req, res) => {
    res.send('Hello World! @' + new Date());
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));