import Template from "../../components/Details/Template";
const apiUrl = process.env.API_URL;
const apiKey = process.env.API_KEY;


async function getCatBreeds(){
  const response = await fetch(`${apiUrl}/breeds`, {headers: { "x-api-key": apiKey }});
  const breeds = await response.json();
  return breeds;
}


export async function getStaticProps(context) {
  const { params } = context;
  const { id } = params;

  //Filter for specific cat breed
  const breeds = await getCatBreeds();
  const breed = breeds.find((breed) => breed.id === id);

  //Get breed photos
  const photosResponse = await fetch(`${apiUrl}/images/search?limit=8&breed_ids=${id}`,{ headers: { "x-api-key": apiKey } });
  const photos = await photosResponse.json();

  return { props: { breed, photos }, revalidate: 300 };
}

export async function getStaticPaths() {

  const breeds = await getCatBreeds();

  const ids = breeds.map(breed => breed.id);

  const params = ids.map(id => ({params: {id:id}}));

  return { paths: params, fallback:'blocking' };
}

function Breed({ breed, photos }) {
  return (
    <>
      <Template breed={breed} photos={photos} />
    </>
  );
}

export default Breed;
