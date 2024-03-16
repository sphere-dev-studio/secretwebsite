<template>
    <div>
        <h1>Heure de Paris</h1>
        <p>{{ heure }}</p>
    </div>
</template>

<script>
import { useState, useEffect } from 'vue';

export default {
    name: 'ParisTime',
    setup() {
        const [heure, setHeure] = useState('');

        useEffect(() => {
            const interval = setInterval(() => {
                const date = new Date();
                const heureParis = date.toLocaleTimeString('fr-FR', {
                    timeZone: 'Europe/Paris',
                });
                setHeure(heureParis);
            }, 1000);

            return () => {
                clearInterval(interval);
            };
        }, []);

        return {
            heure,
        };
    },
};
</script>

<style scoped>
h1 {
    font-size: 24px;
    font-weight: bold;
}

p {
    font-size: 18px;
}
</style>