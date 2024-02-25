import express from "express";
const router = express.Router();
import { 
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile,
    getUsers,
    deleteUser,
    getUserbyID,
    updateUser,
    
 } from "../controllers/userController.js";
 import {protect, admin} from '../middleware/authMiddleware.js';

router.route('/').post(registerUser).get(protect, admin,getUsers);
router.post('/logout', logoutUser);
router.post('/auth', authUser);
router.route('/profile').get(protect,getUserProfile).put(protect,updateUserProfile);
router.route('/:id').delete(protect, admin,deleteUser).get(protect,getUserbyID).put(protect, admin,updateUser);

export default router;
