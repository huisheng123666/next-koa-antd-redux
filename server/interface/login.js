const Router = require('koa-router')

const router = new Router({
  prefix: '/api'
})

router.get('/:id', async (ctx) => {
  ctx.body = {
    id: ctx.params.id
  }
})

module.exports = router
