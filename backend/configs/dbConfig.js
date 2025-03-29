import mongoose from "mongoose";
import 'dotenv/config'
import debug from 'debug';

const logger = debug('dev:mongoose');
const { MONGODB_URI } = process.env;

const connectDB = async () => {
    const notFound = !MONGODB_URI;
    try {
        if (notFound) {
            logger(`-- Error: Вы допускаете ошибки в конфигурациях кода,
                ваша база данных не подключается. Пишите более чистый код.`);
            return process.exit(1);
        }

        await mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, });
        logger("===== DATABASE CONNECTED =====");

    } catch (err) {
        console.error(`===== DATABASE CONNECTION FAILED =====: ${err.message}`);
        process.exit(1);
    }
};

export default connectDB;