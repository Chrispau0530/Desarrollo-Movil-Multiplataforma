import {model,Schema} from 'mongoose'
const clasroomsSchema = new Schema ({
    _id:{
        unique:true,
        require:true,
        type:Number
    },
    building:Number,
    carrer:String,
    type:String,
    capacity:String,
    
},{
versionKey:false,
timestamps:true
})
export default model('clasroom',clasroomsSchema)