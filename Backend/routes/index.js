import express from "express";
import { getUsers, Register, Login, Logout } from "../controllers/Users.js";
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";
import { create, findAll, findOne, update, deleteNotes, deleteAll } from "../controllers/notesCtrl.js";

 
const router = express.Router();
 
router.get('/users', verifyToken, getUsers);
router.post('/users', Register);
router.post('/login', Login);
router.get('/token', refreshToken);
router.delete('/logout', Logout);
 
// Notes routes

router.post("/notes/create", create);
router.get("/notes/findAll", findAll);
router.get("/notes/find/:id", findOne);
router.put("/notes/update/:id", update);
router.delete("/notes/delete/:id", deleteNotes);
router.delete("/notes/delete", deleteAll);

export default router;
 