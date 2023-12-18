const mongoose =require('mongoose')

const  productSchema = mongoose.Schema
(
    {
        PatientID: {
            typeof:String,
            required:[ True,"Please enter patient ID"]
        },
        Surname: {
            typeof:String,
            required:[ True,"Please enter your surname"]
        },
        Othernames: {
            typeof:String,
            required:[ True,"Please enter your other name"]
        },
        Gender: {
            typeof:String,
            required:[ True,"Please state your gender"]
        },
        PhoneNumber: {
            typeof:Number,
            required:[ True,"Please enter your phone number"]
        },
        ResidentialAddress: {
            typeof:Number,
            required:[ True,"Please enter your residential address"]
        },
        EmergencyName: {
            typeof:String,
            required:[ True,"Please enter your emergency name"]
        },
        Contact: {
            typeof:String,
            required:[ True,"Please enter your contact"]
        },
        Relationshipwithpatient: {
            typeof:String,
            required:[ True,"Please state your relationship with the patient"]
        }
    },
    {
        TimeRanges: true
    }
)

    const Product =mongoose.model('Product',productSchema);

    module.exports = Product;
