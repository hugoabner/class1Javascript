// Para obtener solo el batch ""
const batchName = "<aqui el nombre del batch>";
const encodedName = encodeURIComponent(batchName);
const url = `<aqui la url del bucket>`;

console.log(url);
ITEMS_DATA = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  nombre: `Producto ${i + 1}`,
  categoria: ["Tecnología", "Ropa", "Hogar"][i % 3],
  marca: ["Lenovo", "Samsung", "Nike"][i % 3],
  precio: 100 + i * 10,
  stock: 10 + i,
  sku: `PROD-${String(i + 1).padStart(3, "0")}`,
  descripcion: `Descripción del producto ${i + 1}`,
  estado: "Activo",
  rating: (Math.random() * 5).toFixed(1),
  proveedor: "Proveedor X",
  garantia: "1 año",
  color: ["Negro", "Blanco", "Gris"][i % 3],
  peso: `${(Math.random() * 2).toFixed(2)}kg`,
  dimensiones: "30x20x10 cm",
  modelo: `Modelo ${i + 1}`,
  anio: 2024 + (i % 2),
  pais: "Perú",
  descuento: i % 20,
  ventas: i * 5,
  codigoBarras: `1234567890${i}`,
  lote: `L${i + 1}`,
  fechaIngreso: "2026-01-01",
  fechaActualizacion: "2026-04-01",
  usuarioCreacion: "admin",
  usuarioActualizacion: "admin",
  impuesto: 18,
  moneda: "PEN",
  ubicacion: `Almacén ${String.fromCharCode(65 + (i % 3))}`,
  estadoLogistico: "Disponible"
}));

console.log(ITEMS_DATA);