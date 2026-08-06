const name = async () => {
  const name = "<aqui el nombre del archivo>";
  const oAuthToken = "<aqui el token de autenticacion>";

  try {
    const res = await fetch(`<URL>/${name}`, {
      headers: {
        "Content-Type": "application/json",
        "X-Auth-Token": "<aqui el token de autenticacion>",
        Authorization: `Bearer ${oAuthToken}`,
      },
    });

    if (!res.ok) {
      console.error(`Error: ${res.status} - ${res.statusText}`);
      const errorBody = await res.text();
      console.error(`Response body: ${errorBody}`);
      throw new Error("Failed to fetch the object.");
    }

    const contentType = res.headers.get("content-type");
    let data;
    if (contentType.startsWith("application/json")) {
      data = await res.json();
    } else if (contentType.startsWith("text/plain")) {
      data = await res.text();
    } else if (contentType.startsWith("application/octet-stream")) {
      data = await res.blob();
    } else {
      data = await res.text();
    }

    console.log("Data fetched successfully:", data);
    return data;
  } catch (error) {
    console.error("An unexpected error occurred:", error);
    throw error;
  }
};

name().then(console.log).catch(console.error);
