`use strict`

const Service = require('egg').Service

class MerchantService extends Service {
  async search() {
    console.log('search start')
    let sql = 'select * from merchant'
    const list = await this.app.mysql.query(sql)
    // console.log('list is ::::', list)
    return list
  }
}

module.exports = MerchantService