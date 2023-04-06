let dataOrder = {
  nama: "",
  email: "",
  tanggal: "",
  jam: "",
  layanan: "",
  harga: 0,
};

if (dataOrder.layanan === "Pijat Swedia") {
  dataOrder.harga = 150_000;
}

if (dataOrder.layanan === "Pijat Aromaterapi") {
  dataOrder.harga = 120_000;
}

if (dataOrder.layanan === "Pijat Sport") {
  dataOrder.harga = 140_000;
}
