function generateUserId() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  const userId = `${year}${month}${day}${hours}${minutes}${seconds}`;
  return userId;
}

let index = 0;
const interval = setInterval(() => {
  if (index >= 105) {
    clearInterval(interval); // Detiene el intervalo después de 105 iteraciones
    return;
  }
  console.log(`User ID ${index + 1}: `, generateUserId());
  index++;
}, 1000); // Ejecuta cada 1 segundo