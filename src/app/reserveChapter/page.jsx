'use client'
import { reserveChapterBySeason } from '@/functions/functionsUser';
import React, { useState } from 'react'

export default function reserveChapter() {
    const [chapter, setChapter] = useState('');
    const [season, setSeason] = useState('');
    

    const handleReserveChapter = async () => {
        try {
            const data = await reserveChapterBySeason(season,chapter);
            data && alert('capitulo reservado por 4 mintos.')
        } catch (error) {
            console.error('Error reserve chapter. Please try again later.');
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
            <button onClick={() => handleReserveChapter()} >Reservar</button>
        </div>
    )
}
