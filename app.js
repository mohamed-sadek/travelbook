const Koa = require('koa');
const Router = require('koa-router');
const BodyParser = require("koa-bodyparser");
const app = new Koa();

const router = new Router();
app.use(router.routes()).use(router.allowedMethods());
app.use(BodyParser());

router.get('/', async ctx => {
	let name = ctx.request.body.name || "World";
	ctx.body = `Hello ${name}!`;
});


app.listen(3000);