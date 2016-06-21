dogparderAdminApp.provider('NgAdminEntity', function(){
  this.addAccountEntity = function (nga, admin) {
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

    return accounts;
  }
})
