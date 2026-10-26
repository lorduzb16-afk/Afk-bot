const mineflayer = require('mineflayer');

function createBot() {
    const bot = mineflayer.createBot({
        host: 'Parazite-nkvd.aternos.me',
        port: 35303,
        username: 'AFK_Bot_Telefon',
        version: false
    });

    bot.on('spawn', () => {
        console.log('Bot serverga kirdi!');
    });

    // Aternos o'chib qolmasligi uchun bot har 10 soniyada sakraydi
    setInterval(() => {
        bot.setControlState('jump', true);
        setTimeout(() => {
            bot.setControlState('jump', false);
        }, 500);
    }, 10000);

    bot.on('end', () => {
        console.log('Bot uzildi. 15 soniyadan keyin qayta ulanadi');
        setTimeout(() => {
            createBot();
        }, 15000);
    });
}

// Botni mutloq ishga tushirish buyrug'i
createBot();
