'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/merchant', controller.merchant.search)
  router.get('/merchant/:id', controller.merchant.searchById)
};
