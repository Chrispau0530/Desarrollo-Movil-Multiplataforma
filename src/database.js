//Aqui va la conexion a la base de datos utilizando mongose

import mongoose from 'mongoose';
mongoose.connect('mongodb+srv://rodriguezperezchristianpaul:Mapachito070323@cluster0chris.v5bqv.mongodb.net/school_control_db?retryWrites=true&w=majority&appName=Cluster0Chris')
.then((db)=> console.log ("Mongodb atlas connected"))
.catch((error)=>console.error(error))
export default mongoose
