const Koa = require('koa');
var Router = require('koa-router');

const render = require('koa-ejs');
const path = require('path');

const app = new Koa();
var router = new Router();
const PORT = 5000

// ejs settings
render(app, {
  root: path.join(__dirname, 'views'),
  layout: 'layout',
  viewExt: 'html',
  cache: false,
  debug: false,
});

// logger middleware
app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  console.log(`Metot: ${ctx.method}\n ${ctx.url} : ${ms} ms`);
});

// definition function for multiple route
const engine = (url , page_namex) => {
  router.get(url, async (ctx, next) => {
    const page_name = page_namex;
    await ctx.render('layout', {
      page_name
    }); 
})}

engine('/' , "Home")
engine('/about/' , "About")
engine('/contact/' , "Contact")

// router
app
  .use(router.routes())
  .use(router.allowedMethods());

// listen to server on port
app.listen(PORT, () => {
    console.log(`listened at http://localhost:${PORT}`)
})