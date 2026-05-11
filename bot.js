const TelegramBot = require('node-telegram-bot-api');

const token = "8771917353:AAElbTY-f_sbgZ6oGNY0s8Wb8rk_Nd6m_TI"

const bot = new TelegramBot(token, { polling: true });

let resposta = "";

bot.onText(/\/start/, (msg) => {
    bot.sendMessage(
        msg.chat.id,
        "🎮 BOT ONLINE!\n\n/comecar\n/emoji"
    );
});

bot.onText(/\/comecar/, (msg) => {

    resposta = "corinthians";

    bot.sendMessage(
        msg.chat.id,
        "🎯 ADIVINHE!\n\n🔠 11 letras\nComeça com C"
    );
});

bot.onText(/\/emoji/, (msg) => {

    resposta = "flamengo";

    bot.sendMessage(
        msg.chat.id,
        "⚫🔴🏆"
    );
});

bot.on("message", (msg) => {

    if (!msg.text) return;

    if (
        msg.text.toLowerCase() === resposta
    ) {

        bot.sendMessage(
            msg.chat.id,
            `🏆 ${msg.from.first_name} acertou!`
        );

        resposta = "";
    }
});
