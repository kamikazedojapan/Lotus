const mongoose = require("mongoose");

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB Atlas conectado com sucesso");
    } catch (error) {
        console.error("Erro ao conectar ao MongoDB Atlas:");
        console.error(error.message);

        process.exit(1)
    }
}

module.exports = connectDB;