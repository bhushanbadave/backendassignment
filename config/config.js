/*
 * Author: Bhushan Badave
 * Date : 02/08/2021
 * Useability: For setting the environment configuration
 */

const config = {
    development: {
        host: "0.0.0.0",
        port: 80,
        storage: {
            primaryMongoDBURI: "mongodb+srv://bhushanbadave:<password>@cluster0.vflk9.mongodb.net/interview"
            database:"interview"
        }
    }
}

const env = "development";
config[env].env = env;
module.exports = config[env]
