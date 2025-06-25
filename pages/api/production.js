const API_URL = "https://www.datos.gov.co/resource/mqu6-d62c.json";

export async function getDataProd() {
  const response = await fetch(API_URL);
  if (!response.ok) throw new Error("Failed to fetch production data");
  return await response.json();
}

export async function getDataProdById(crop_id) {
  const response = await fetch(API_URL);
  if (!response.ok) throw new Error("Failed to fetch production data");
  const data = await response.json();
  const crops = data.map((crop, index) => ({
    id: index + 1,
    ...crop,
  }));
  return crops.find((crop) => crop.id === parseInt(crop_id));
}
