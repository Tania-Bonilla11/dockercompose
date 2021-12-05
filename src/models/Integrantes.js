const {Schema,model} =require('mongoose')
const IntegantesSchema = new Schema({
  nombre: {
    type: String,
    required: [true, "Ingrese un nombre"],
  }
});
module.exports=model('Integrantes',IntegantesSchema)