import * as mongoose from 'mongoose';

export const LocationSchema = new mongoose.Schema({
    locationName: String
});

export interface Location {
    locationName: string;
}