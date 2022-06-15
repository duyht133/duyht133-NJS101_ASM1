const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const staffSchema = new Schema({
  userId:{
    type:Schema.Types.ObjectId,
    ref:"User",
  },
  name:{
    type: String,
   
  },
  doB:{
    type: Date,
    default: Date.now 
  },
  salaryScale:{
    type:String,
    
  },
  startDate:{
    type: Date,
    default: Date.now,
  },
  Image:{
    type:String,
    
  },
  annualLeave:{
    type:String,
    
  },
  department:{
    type:String,
    
  },
  employment:{
    type:String,
  },
  startTime:{
    type: Date,
    default: Date.now 
  },
  work:{
    type:Boolean,
  },
  hourWork:{
    type:Number,
  }
});

module.exports = mongoose.model("Staff", staffSchema)

