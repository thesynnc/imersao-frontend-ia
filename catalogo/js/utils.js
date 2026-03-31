export function getYouTubeId(url) {
    if (!url) return "7RUA0IOfar8";
    if (url.includes('v=')) {
        return url.split('v=')[1].split('&')[0];
    }
    return url.split('/').pop();
}

export function getRandomMatchScore() {
    return Math.floor(Math.random() * 20 + 80);
}

export function getRandomDuration(hasProgress) {
    return hasProgress ? '10 temporadas' : '2h ' + Math.floor(Math.random() * 59) + 'm';
}

export function getRandomAgeBadge() {
    const ratings = [
        { text: 'L', class: 'green-accent' },     // Livre
        { text: '10', class: 'blue-accent' },
        { text: '12', class: 'yellow-accent' },
        { text: '14', class: 'orange-accent' },
        { text: '16', class: 'red-accent' },
        { text: '18', class: 'dark-red-accent' }
    ];

    return ratings[Math.floor(Math.random() * ratings.length)];
}
