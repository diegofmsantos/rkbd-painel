"use client"

import React, { useState } from 'react';

type Props = {
    placeholder: string,
    onInputchange: (value: string) => void
}

export const Input = ({ placeholder, onInputchange }: Props) => {

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        onInputchange(value)
    }

    return (
        <input
            type="number"
            onChange={handleInputChange}
            placeholder={placeholder}
            className="w-44 outline-none px-1 bg-gray-100 border border-gray-300"
        />
    )
}
