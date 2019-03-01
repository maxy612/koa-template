const Router = require('koa-router');

const router = new Router({ prefix: '/user' });

router.post('/login', async ctx => {
  let body = ctx.request.body;
  console.log(body);
  ctx.body = 'hello,world';
})

router.get('/', async ctx => {
  await ctx.render('user');
})

module.exports = router;