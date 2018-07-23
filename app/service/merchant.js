`use strict`
// import {pick} from 'lodash'
const Service = require('egg').Service

const _ = require('lodash')

class MerchantService extends Service {
  async search() {
    console.log('search start')
    let sql = 'SELECT id, latitude, longitude FROM merchant'
    const list = await this.app.mysql.query(sql)
    // console.log('list is ::::', list)
    return list
  }

  async searchById(id) {
    let sql = ''
    if (id) {
      const result = await this.app.mysql.get('merchant', {id: id})
      return _.pick(result, ['id', 'name', 'province', 'city', 'district', 'street_address'])
    } else {
      return null
    }
    
  }
}

module.exports = MerchantService