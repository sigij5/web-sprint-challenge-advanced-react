import React, {useState, useEffect} from 'react'
import {useLocalStorage} from './useLocalStorage'



export const useDarkMode = () => {
    const [storedValue, setValue] = useLocalStorage('darkMode', false);

    useEffect(() => {
        const form = document.querySelector('.form')
        console.log(form)
        
        if (storedValue === true) {
            document.body.classList.add('dark-mode')
            // form.classList.add('dark-form')
        } if (storedValue === false) {
            document.body.classList.remove('dark-mode')
            // form.classList.remove('dark-form')
        }
    }, [storedValue]);

    return [storedValue, setValue]
}