const mongoose = require("mongoose");
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'a name is required'],
            unique: true,
            trim: true,
            validate: {
                validator: function (val) {
                    const newString = val.split(' ').join('')
                    return validator.isAlpha(newString)
                },
                message: 'The username can only accept characters',
            },
        },
        password: {
            type: String,
            required: [true, 'a password is required'],
            minlength: [6, 'Your password must be at least 6 characters long'],
            select: false,
        },
        role: {
            type: String,
            default: 'user',
            enum: {
                values: ['admin', 'user']
            }
        }
    }
)

// Basic Password encryption only. No reset token or the ability to change password.

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 12);
    next();
})

userSchema.methods.correctPassword = async function (
    candidatePassword,
    userPassword
  ) {
    return await bcrypt.compare(candidatePassword, userPassword);
};

const User = mongoose.model('User', userSchema);

module.exports = User;