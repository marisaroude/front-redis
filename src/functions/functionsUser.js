export const listChaptersBySeason = async (season) => {
    const url = `http://localhost:3001/list-chapters?season=${season}`;
    try {
        const response = await fetch(url); 
        if (response.ok) { 
            const data = await response.json(); 
            return data;
        } else {
            throw new Error('Error fetching chapters:', response.status); 
        }
    } catch (error) {
        console.error(error);
        throw error; 
    }
}


export const addChaptersBySeason = async (season, chapter) => {
    const url = `http://localhost:3001/add-chapter?season=${season}&chapter=${chapter}`;
    try {
        const response = await fetch(url); 
        if (response.ok) { 
            const data = await response.json(); 
            return data;
        } else {
            throw new Error('Error add chapter:', response.status); 
        }
    } catch (error) {
        console.error(error);
        throw error; 
    }
}

export const reserveChapterBySeason = async (season, chapter) => {
    const url = `http://localhost:3001/reserve-chapter?season=${season}&chapter=${chapter}`;
    try {
        const response = await fetch(url); 
        if (response.ok) { 
            const data = await response.json(); 
            return data;
        } else {
            throw new Error('Error reserve chapter:', response.status); 
        }
    } catch (error) {
        console.error(error);
        throw error; 
    }
}

export const payReserveChapter = async (season, chapter, price) => {
    const url = `http://localhost:3001/payment-chapter?season=${season}&chapter=${chapter}&price=${price}`;
    try {
        const response = await fetch(url); 
        if (response.ok) { 
            const data = await response.json(); 
            return data;
        } else {
            throw new Error('Error payment chapter:', response.status); 
        }
    } catch (error) {
        console.error(error);
        throw error; 
    }
}

export const listChaptersReservedBySeason = async (season) => {
    const url = `http://localhost:3001/list-reserved?season=${season}`;
    try {
        const response = await fetch(url); 
        if (response.ok) { 
            const data = await response.json(); 
            return data;
        } else {
            throw new Error('Error fetching chapters:', response.status); 
        }
    } catch (error) {
        console.error(error);
        throw error; 
    }
}



export const listChaptersRentedBySeason = async (season) => {
    const url = `http://localhost:3001/list-rented?season=${season}`;
    try {
        const response = await fetch(url); 
        if (response.ok) { 
            const data = await response.json(); 
            return data;
        } else {
            throw new Error('Error fetching chapters:', response.status); 
        }
    } catch (error) {
        console.error(error);
        throw error; 
    }
}
