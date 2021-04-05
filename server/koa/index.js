const Koa = require('koa');
const app = new Koa();
const serve = require('koa-static');
const bodyParser = require('koa-bodyparser');
const router = require('./routes/router');
const conf = require('./config');

const localHost = '127.0.0.1';
const PORT = 3050;


app.use(serve('./public'));

app.use(serve(conf.clientPath));
app.use(bodyParser());
app.use(router.routes());

app.listen(PORT, () => console.log(`server running at http://${localHost}:${PORT}`));