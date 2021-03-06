'use strict';

/**
 * @ngdoc overview
 * @name dogparkerAdminApp
 * @description
 * # dogparkerAdminApp
 *
 * Main module of the application.
 */
var dogparderAdminApp = angular
  .module('dogparkerAdminApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ng-admin'
  ])
  .config(['NgAdminConfigurationProvider', 'NgAdminEntity', function (nga, NgAdminEntity) {
    var admin = nga.application('My First Admin')
      .baseApiUrl('http://localhost:8080/api/v1/'); // main API endpoint

    var accounts = nga.entity('account');

    accounts.listView().fields([
      nga.field('email')
          .isDetailLink(true),
      nga.field('paymentID')
          .label('Payment id'),
      nga.field('name.firstName')
          .label('First name'),
      nga.field('name.lastName')
          .label('Last Name'),
      nga.field('phone'),
      nga.field('zipcode'),
      nga.field('type')
    ]);

    accounts.showView().fields([
      nga.field('email'),
      nga.field('paymentID'),
      nga.field('name.firstName'),
      nga.field('name.lastName'),
      nga.field('phone'),
      nga.field('zipcode'),
      nga.field('type')
    ]);

    admin.addEntity(accounts)

    nga.configure(admin)
  }]);
