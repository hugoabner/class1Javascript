const getTokenKarlos = async () => {
  const response = await fetch(
    "<aqui la url del backend>/api/v1/auth/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: "<aqui el usuario>",
        password: "<aqui la contraseña>",
      }),
    },
  );
  const data = await response.json();
  return data.token;
};

const getTokenGoogle = async () => {
  const res = await fetch(
    "<aqui la url del backend>/api/v1/auth/google",
    {
      method: "GET",
      headers: {
        "X-Auth-Token": await getTokenKarlos(),
      },
    },
  );
  const data = await res.json();
  return data.access_token;
};

const CACHE = false;
const getAllFiles = async () => {
  const DOWNLOAD_PATH = "/download/storage/v1/b";
  const BUCKET_NAME = "/gerenciariesgos-1-bucket/o/";
  const NAME_FILE = "json/columns-importacion.json";
  const params = new URLSearchParams({
	maxResults: "10",
    alt: "media",
    v: CACHE ? "1" : `${Date.now()}`,
  });
  console.log(`<aqui la url del bucket>/${BUCKET_NAME}${encodeURIComponent(NAME_FILE)}?${params.toString()}`);
  const res = await fetch(
    `<aqui la url del bucket>${DOWNLOAD_PATH}${BUCKET_NAME}${encodeURIComponent(NAME_FILE)}?${params.toString()}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${await getTokenGoogle()}`,
      },
    },
  );
  const data = await res.json();
  return data;
};
const getFilesPage = async (pageToken = '') => {
  const BUCKET_NAME = "<aqui el nombre del bucket>";

  const params = new URLSearchParams({
    maxResults: "10",
    prefix: "polizasBatch/json/", // opcional si quieres filtrar carpeta
  });

  if (pageToken) {
    params.append("pageToken", pageToken);
  }

  const res = await fetch(
    `<aqui la url del bucket>/${BUCKET_NAME}/o?${params.toString()}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${await getTokenGoogle()}`,
      },
    }
  );

  const data = await res.json();

  return {
    files: data.items || [],
    nextPageToken: data.nextPageToken || null,
  };
};
const res = await getFilesPage();
console.log(res);