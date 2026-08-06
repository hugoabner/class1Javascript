function uploadFile(file) {
  const token = 'TU_ACCESS_TOKEN'; // viene de tu backend

  const objectUri = `uploads/${file.name}`;

  const url = `<aqui la url del bucket>/${encodeURIComponent(objectUri)}`;

  await fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': file.type
    },
    body: file
  });

  console.log('Subido 🚀');
}