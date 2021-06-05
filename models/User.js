const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  },
  first_name: {
    type: String
  },
  last_name: {
    type:String
  },
  birthday: {
    type : String
  },
  phone_number: {
    type : Number
  },
  nationality: {
    type: String
  },
  country: {
    type :  String
  },
  zipcode: {
    type: Number
  },
  passport_id_image: {
    type: String
  },
  passport_services_image: {
    type: String
  },
  passport_verify_image: {
    type: String
  },
  bank_name: {
    type: String
  },
  bank_number: {
    type: Number
  },
  swift_code: {
    type: Number
  },
  account_type: {
    type: String
  }
});

module.exports = User = mongoose.model('users', UserSchema);
