import { Sequelize } from "sequelize";
import db from "../config/Database.js";
 
const { DataTypes } = Sequelize;
 
const Notes = db.define('notes',{
    title:{
        type: DataTypes.STRING
    },
    description:{
        type: DataTypes.TEXT
    },
    published:{
        type: DataTypes.TEXT
    }
},{
    freezeTableName:true
});
 
// (async () => {
//     await db.sync();
// })();
 
export default Notes;