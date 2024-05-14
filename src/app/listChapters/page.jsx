'use client'
import { listChaptersBySeason } from '@/functions/functionsUser';
import React, { useState } from 'react'

export default function listChapters() {
    const [chapters, setChapters] = useState([]);
    const [season, setSeason] = useState('');

    const getChapters = async () => {
        try {
            const data = await listChaptersBySeason(season);
            setChapters(data);
        } catch (error) {
            console.error('Error fetching chapters. Please try again later.');
        }
    }
    const handleSeasonChange = (event) => {
        setSeason(event.target.value);
    }

    return (
        <div>
            <input type="text" value={season} onChange={handleSeasonChange} placeholder="Enter season" />
            <button onClick={() => getChapters()} >Listar</button>
            <ul>
                {chapters?.map((chapter, index) => (
                    <li key={index}>{chapter}</li>
                ))}
            </ul>
        </div>
    )
}
