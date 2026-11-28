const KeranjangBelanja = (function () {
  let instance;

  function init() {
    const items = [];
    const rupiah = (n) => "Rp" + n.toLocaleString("id-ID");

    return {
      tambah(nama, harga, jumlah = 1) {
        const item = items.find((i) => i.nama === nama);
        if (item) {
            item.jumlah += jumlah
        } else {
            items.push({ nama, harga, jumlah });
        }
      },
      hapus(nama) {
        const idx = items.findIndex((i) => i.nama === nama);
        if (idx === -1) return false;
        items.splice(idx, 1);
        return true;
      },
      total() {
        return items.reduce((sum, i) => sum + i.harga * i.jumlah, 0);
      },
      tampilkan() {
      items.forEach((i) => {
        console.log(`- ${i.nama} x${i.jumlah} = ${rupiah(i.harga * i.jumlah)}`);
      });
      console.log(`Total: ${rupiah(this.total())}`);
      },
    };
  }

  return {
    getInstance() {
      if (!instance) instance = init();
      return instance;
    },
  };
})();

const k1 = KeranjangBelanja.getInstance();
k1.tambah("Buku", 50000, 2);
k1.tambah("Pulpen", 5000, 3);

const k2 = KeranjangBelanja.getInstance();
k2.tambah("Buku", 50000, 1);

console.log("Keranjang sama?", k1 === k2);
k2.tampilkan();
console.log("Hapus Pulpen:", k1.hapus("Pulpen"));
console.log("Hapus Pensil:", k1.hapus("Pensil"));
k1.tampilkan();