import Template from "../components/Home/Template";

export async function getServerSideProps() {
  const apiUrl = process.env.API_URL;
  const apiKey = process.env.API_KEY;

  //Get most searched breed
  const res = await fetch(`${apiUrl}/breeds?limit=4`, { headers: { "x-api-key": apiKey } });

  const breedsRes = await fetch(`${apiUrl}/breeds`, { headers: { "x-api-key": apiKey } });

  const data = await res.json();

  const breeds = await breedsRes.json();

  
  return { props: { data, breeds } };
}

export default function Home({ data, breeds }) {
  return (
    <>
      <Template data={data} breeds={breeds} />
    </>
  );
}
