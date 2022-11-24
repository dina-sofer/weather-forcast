import * as mongoose from 'mongoose';

export const LocationSchema = new mongoose.Schema({
    locationName: String,
    temp: Number,
    humidity: Number
});

export interface Location {
    locationName: string;
    temp: number;
    humidity: number;
}