import { set, connect } from 'mongoose';
set("strictQuery", true);

const connectToDatabase = async () =>   {
    connect(`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_DATABASE}.n9apafi.mongodb.net/?retryWrites=true&w=majority`, error => {
        if (error)
            return console.log('Erro ao se conectar: ', error);

        return console.log('Conectado');
    })
}

export default connectToDatabase;