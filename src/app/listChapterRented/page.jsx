'use client'
import { listChaptersRentedBySeason } from '@/functions/functionsUser';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import React, { useState } from 'react'

export default function listChaptersRented() {
    dayjs.extend(duration);
    const [chapters, setChapters] = useState([]);
    const [season, setSeason] = useState('');

    const getChapterRented = async () => {
        try {
            const data = await listChaptersRentedBySeason(season);
            setChapters(data);
        } catch (error) {
            console.error('Error get list chapters rented. Please try again later.');
        }
    }
    const handleSeasonChange = (event) => {
        setSeason(event.target.value);
    }
    const formatTimeLeft = (timeLeft) => {
        const duration = dayjs.duration(timeLeft);
        const minutes = duration.minutes();
        const seconds = duration.seconds();
        return `${minutes} minutos y ${seconds} segundos`;
    }
    return (
        <div>
            <input type="text" value={season} onChange={handleSeasonChange} placeholder="Enter season" />
            <button onClick={() => getChapterRented()} >Listar capitulos rentados</button>
            <ul>
                {chapters?.map((chapter, index) => (
                    <li key={index}>
                        Capitulo: {chapter.chapter}, Tiempo restante: {formatTimeLeft(chapter.timeLeft)}
                    </li>
                ))}
            </ul>
        </div>
    )
}
