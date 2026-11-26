const kamera = {
    ambilFoto(){
        console.log(`${this.nama} mengambil foto`)
    }
};
const internet = {
    bukaBrowser(){
        console.log(`${this.nama}  membuka browser`)
    }
};
const telepon = {
    panggil(){
        console.log(`${this.nama} melakukan panggilan`)
    }
};
function applyCapabilities(targetClass, ...capabilities){
    capabilities.forEach(capability => {
        Object.assign(targetClass.prototype, capability);
    })
}

class TabletWifi {
    constructor(nama){
        this.nama = nama;
    }
}
applyCapabilities(TabletWifi, kamera, internet);

class PonselJadul {
    constructor(nama){
        this.nama = nama;
    }
}
applyCapabilities(PonselJadul,telepon);

const tablet = new TabletWifi('Tablet_3526');
tablet.ambilFoto();
tablet.bukaBrowser();
const ponsel = new PonselJadul('Ponsel_3526');
ponsel.panggil();

console.log("Ponsel_3552 bisa mengambil foto?" +(typeof ponsel.ambilFoto === `function`))
console.log("Tablet_3552 bisa melakukan panggilan?" +(typeof tablet.panggil === `function`))