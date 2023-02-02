const apiUrl = process.env.API_URL;
const apiKey = process.env.API_KEY;
import Template from "../../components/Details/Template";

//Helper function to fetch catBreeds data
async function getCatBreeds() {
  const response = await fetch(`${apiUrl}/breeds`, {
    headers: { "x-api-key": apiKey },
  });
  const breeds = await response.json();
  return breeds;
}

//getStaticProps
export async function getStaticProps(context) {
  const { params } = context;
  const { id } = params;

  //Filter for specific cat breed
  const breeds = await getCatBreeds();
  const breed = breeds.find((breed) => breed.id === id);

  return { props: { breed } };
}

//getStaticPaths
export async function getStaticPaths() {
  const breeds = await getCatBreeds();

  const ids = breeds.map((breed) => breed.id);

  const params = ids.map((id) => ({ params: { id: id } }));

  return { paths: params, fallback: false };
}

//Page Component
function Breed({ breed }) {
  return (
    <>
      <Template breed={breed} />
    </>
  );
}

export default Breed;
