'use strict'

const Controller = require('egg').Controller

class MerchantController extends Controller {
  async search() {
    const list = await this.ctx.service.merchant.search()
    console.log('list in controller', list)
    this.ctx.logger.info('merchant:::', list)
    this.ctx.body = list
  }

  async searchById() {
    console.log('aa', this.ctx.params)
    const id = this.ctx.params.id
    const result = await this.ctx.service.merchant.searchById(id)
    this.ctx.body = result
  }
}

module.exports = MerchantController