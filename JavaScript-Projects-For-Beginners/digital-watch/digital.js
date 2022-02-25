
setInterval(time,1000);


function time() {
    const now = new Date();
    const saat = now.getHours();
    const dakika = now.getMinutes();
    const saniye = now.getSeconds();
    
    console.log(`${saat}:${dakika}:${saniye}`)

}
time()
