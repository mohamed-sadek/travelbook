const Koa = require('koa');
const serve = require('koa-static');
const Router = require('koa-router');
const BodyParser = require('koa-bodyparser');
const Views = require('koa-views');
const app = new Koa();
const db = require('./db')(app);
const router = new Router();

app.use(BodyParser());
app.use(serve('.'));
app.use(
    Views(__dirname + '/views', {
        map: {handlebars: 'handlebars'},
        options: {
            helpers: {

            },

            partials: {
                header: './header'
            }
        }
    })
);

router.get('/', async ctx => {
    let records = await ctx.app.people.find().toArray();

    await ctx.render('index.handlebars', {
        records: records
    });
});

router.get('/add-trip', async ctx => {
    await ctx.render('add_trip.handlebars');
});

router.post('/add-trip', async ctx => {
    await ctx.app.people.insert(ctx.request.body);
    ctx.status = 200;
    ctx.redirect('/');
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(3000);