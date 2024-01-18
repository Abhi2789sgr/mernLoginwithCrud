import { Sequelize } from "sequelize";
 
const db = new Sequelize('merntest', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});
 
export default db;