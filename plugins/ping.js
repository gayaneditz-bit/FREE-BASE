
cmd({
    pattern: "ping",
    desc: "Replies with Pong!",
    react: "🏓",
    category: "fun",
    filename: __filename
}, async (conn, m, store, { reply }) => {
    reply("Pong!");
});
