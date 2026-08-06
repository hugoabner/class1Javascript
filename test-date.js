export const formatDate = (date) => date.toISOString().split("T")[0];

    const today = new Date();
    // const fechaDeHoy = formatDate(today);

    const masSieteDias = new Date(today);
    masSieteDias.setDate(masSieteDias.getDate() - 7);
    const menosSieteDiasString = formatDate(masSieteDias);

	console.log(`Fecha de hoy: ${formatDate(today)}`);
	console.log(`Menos siete días: ${menosSieteDiasString}`);