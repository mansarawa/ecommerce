import exp from 'constants';
import express from 'express';
import removeitemcontroller from '../controllers/removeitemcontroller.js';

const removeitem=express.Router();

removeitem.put('/removeitem',removeitemcontroller)

export default removeitem;