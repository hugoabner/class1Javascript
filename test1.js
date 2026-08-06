const url = new URL("http://localhost:4200");

const searchParams = new URLSearchParams({
  token: "aquitoekn",
  usuario: "usuario",
  tipo: "anulacion",
  renovacionId: "12345",
  modal: "true",
});

// url + searchParams
// console.log(`${url}?${searchParams.toString()}`);

const getContent = async (name, isBuffer = false) => {
  try {
    const oAuthToken = "<aqui el token de autenticacion>";
    const url = `<aqui la url del bucket>/${name}`;
    console.log(url);
    const res = await fetch(url, {
      headers: { Authorization: `Bearer ${oAuthToken}` },
    });
    const contentType = res.headers.get("content-type");
    if (contentType.startsWith("application/json")) return await res.json();
    if (contentType.startsWith("text/plain")) return await res.text();
    if (isBuffer) return await res.blob();
    const data = await res.text();
    if (JSON.parseable(data)) return JSON.parse(data);
    console.log(JSON.stringify(data, null, 2));
    return data;
  } catch (error) {
    console.trace("Error getContent", error);
    return null;
  }
};
  
getContent("<aqui el nombre del archivo>").then(console.log);
