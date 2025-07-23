import React from 'react'

export const Validate = (email,password) => {
    const isEmailValid = /^[a-zA-Z0-9.]+@[a-zA-Z0-9.]+\.[a-zA-Z]{2,}$/.test(email);
    const isPasswordValid = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(password);

    if(!isEmailValid) return "Email is Not Valid"

    if(!isPasswordValid) return "Password is Not Valid"

    return null;
}

