/*
* module dependencies
* */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

//Schema
var useLogSchema = new Schema({
    name: {
        type:String,
        default:''
    },
    sno: {
        type:Number,
        default:null
    },
    tel: {
        type:Number,
        default:''
    },
    MachineId: {
        type:Number,
        default:null
    },
    useOn: {
        type: Date,
        default: Date.now
    },
    useOff: {
        type: Date,
        default: 0
    },
    note: {
        type: String,
        default: ''
    }
})

mongoose.model('UseLog',useLogSchema)