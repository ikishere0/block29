export async function fetchPlayers() {
  const response = await fetch(
    "https://fsa-puppy-bowl.herokuapp.com/api/$2402-FTB-MT-WEB-PT"
  );
  if (!response.ok) {
    throw new Error("Not responding");
  }
  const data = await response.json();
  return data;
}
