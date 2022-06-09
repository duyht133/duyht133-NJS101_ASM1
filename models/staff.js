const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const staffSchema = new Schema({
  name:{
    type: 'string',
    required:true
  },
  title:{
    type:String,
    required:true
  },
  from:{
    type:String,
    required:true
  },
  work:{
    type:Boolean,
    required:true
  },
  userId:{
    type:Schema.Types.ObjectId,
    required:true
  }
});

module.exports = mongoose.model("Staff", staffSchema)

