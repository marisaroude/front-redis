'use client'
import { listChaptersReservedBySeason } from '@/functions/functionsUser';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import React, { useState } from 'react'

export default function listChaptersReserved() {
    dayjs.extend(duration);
    const [chapters, setChapters] = useState([]);
    const [season, setSeason] = useState('');

    const getChapterReserved = async () => {
        try {
            const data = await listChaptersReservedBySeason(season);
            setChapters(data);
        } catch (error) {
            console.error('Error get list chapters reserved. Please try again later.');
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
            <button onClick={() => getChapterReserved()} >Listar capitulos reservados</button>
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
