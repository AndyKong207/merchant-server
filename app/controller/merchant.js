'use strict'

const Controller = require('egg').Controller

class MerchantController extends Controller {
  async search() {
    const list = await this.ctx.service.merchant.search()
    console.log('list in controller', list)
    this.ctx.body = list
  }
}

module.exports = MerchantController