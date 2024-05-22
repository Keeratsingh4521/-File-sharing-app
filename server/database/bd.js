import mongoose from "mongoose";


const DBconnection =async () =>{
    const MONGODB_URI = `mongodb+srv://keeratsingh4521:keeratsingh4521@filesharing.qs543ls.mongodb.net/?retryWrites=true&w=majority&appName=fileSharing`;
    try{
       await mongoose.connect(MONGODB_URI,{useNewUrlParser: true});
       console.log('Database connected successfully');
    }catch(error){
        console.error('error while connecting to the database',error.message)

    }
}

export default DBconnection;