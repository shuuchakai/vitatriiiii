import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        maxlength: 100
    },
    email: {
        type: String,
        unique: true,
        trim: true,
        lowercase: true,
        required: true,
        match: /^\S+@\S+\.\S+$/
    },
    password: {
        type: String,
        trim: true,
        required: true,
        minlength: 6
    },
    biologicalSex: {
        type: String,
        required: true,
        enum: ['Masculino', 'Femenino']
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    height: {
        type: Number,
        required: true,
        min: 0,
    },
    weight: {
        type: Number,
        required: true,
        min: 0
    },
    dieteticPreferences: {
        type: String,
        trim: true
    },
    fitnessExperience: {
        type: String,
        trim: true
    },
    medicLimitations: {
        type: String,
        trim: true
    },
    bloodType: {
        type: String,
        trim: true
    },
    personalFitnessPreferences: {
        type: String,
        trim: true
    },
    mainGoal: {
        type: String,
        enum: ["Incrementar masa muscular", "Incrementar peso", "Mantener peso", "Perder peso"],
    },
}, { timestamps: true });

userSchema.index({ email: 1 });

const User = model('User', userSchema);

export default User;