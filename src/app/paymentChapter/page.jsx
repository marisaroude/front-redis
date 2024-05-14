'use client'
import {  payReserveChapter } from '@/functions/functionsUser';
import React, { useState } from 'react'

export default function paymentChapters() {
    const [chapter, setChapter] = useState('');
    const [season, setSeason] = useState('');
    const [price, setPrice] = useState('');
    

    const payReserve = async () => {
        try {
            const data = await payReserveChapter(season,chapter,price);
            data && alert('capitulo rentado por 24hs')
        } catch (error) {
            console.error('Error pay reserve. Please try again later.');
        }
    }
    const handleSeasonChange = (event) => {
        setSeason(event.target.value);
    }

    const handleChapterChange = (event) => {
        setChapter(event.target.value);
    }

    const handlePriceChange = (event) => {
        setPrice(event.target.value);
    }
    return (
        <div>
            <input type="text" value={season} onChange={handleSeasonChange} placeholder="Enter season" />
            <input type="text" value={chapter} onChange={handleChapterChange} placeholder="Enter chapter" />
            <input type="text" value={price} onChange={handlePriceChange} placeholder="Enter price" />

            <button onClick={() => payReserve()} >Pagar reserva</button>
        </div>
    )
}
