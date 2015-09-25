/**
* Device.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  attributes: {
    address: {
      type: 'string',
      unique: true,
      required: true
    },
    discovered: {
      type: 'datetime',
      defaultsTo: function (){ return new Date(); }
    },
    name: {
      type: 'string'
    },
    owner: {
      model: 'person'
    }
  }
};

