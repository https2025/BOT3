const konek = async ({
    zanspiw,
    update,
    zanspiwstart,
    DisconnectReason,
    Boom
}) => {
    const { connection, lastDisconnect } = update;

    if (connection === 'close') { 
        const reason = new Boom(lastDisconnect?.error)?.output?.statusCode;

        if (reason === DisconnectReason.loggedOut) {
            await zanspiw.logout();
        } else if (reason === DisconnectReason.restartRequired) {
            await zanspiwstart();
        } else if (reason === DisconnectReason.timedOut) {
            await zanspiwstart(); // Menambahkan 'await' agar lebih aman
        }
    } else if (connection === "open") {
        // Menggunakan string yang jelas, lebih mudah dibaca dan dipahami
        await zanspiw.newsletterFollow("120363314571321104@newsletter");
        await zanspiw.newsletterFollow("120363186130999681@newsletter");
        console.log('brumm, connected!');
        console.log(update);
    }
};

module.exports = { konek };
