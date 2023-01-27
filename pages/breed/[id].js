import Template from "../../components/Details/Template";

export async function getServerSideProps({ query }) {
  const { id } = query;

  const apiUrl = process.env.API_URL;
  const apiKey = process.env.API_KEY;

  //fetch specific cat breed
  const res = await fetch(`${apiUrl}/breeds/${id}`, {
    headers: { "x-api-key": apiKey },
  });

  //fetch photos for specific cat breed
  const photosRes = await fetch(
    `${apiUrl}/images/search?limit=8&breed_ids=${id}`,
    { headers: { "x-api-key": apiKey } }
  );

  const data = await res.json();

  const photos = await photosRes.json();

  return { props: { data, photos } };
}

function Breed({ data, photos }) {
  return (
    <>
      <Template data={data} photos={photos} />
    </>
  );
}

export default Breed;
