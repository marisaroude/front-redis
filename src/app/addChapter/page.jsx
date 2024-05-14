'use client'
import { addChaptersBySeason } from '@/functions/functionsUser';
import React, { useState } from 'react'

export default function addChapter() {
    const [chapter, setChapter] = useState('');
    const [season, setSeason] = useState('');
    

    const addChapters = async () => {
        try {
            const data = await addChaptersBySeason(season,chapter);
            data && alert('capitulo añadido')
        } catch (error) {
            console.error('Error add chapters. Please try again later.');
        }
    }
    const handleSeasonChange = (event) => {
        setSeason(event.target.value);
    }

    const handleChapterChange = (event) => {
        setChapter(event.target.value);
    }
    return (
        <div>
            <input type="text" value={season} onChange={handleSeasonChange} placeholder="Enter season" />
            <input type="text" value={chapter} onChange={handleChapterChange} placeholder="Enter chapter" />
            <button onClick={() => addChapters()} >Agregar</button>
        </div>
    )
}
