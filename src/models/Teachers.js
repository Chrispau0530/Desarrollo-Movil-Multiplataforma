import {model,Schema} from 'mongoose'
const teachersSchema = new Schema ({
    teachers_id:{
        unique:true,
        require:true,
        type:Number
    },
    name:String,
    lastname:String,
    career:Number,
    salary:Number,
    age:Number
},{
versionKey:false,
timestamps:true
})
export default model('teachers',teachersSchema)
