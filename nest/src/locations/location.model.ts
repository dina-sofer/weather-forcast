/* eslint-disable prettier/prettier */
import * as mongoose from 'mongoose';

export const locationSchema = new mongoose.Schema({
    name: String
})

export interface Location {
    name: string;
}