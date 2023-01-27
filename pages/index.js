import Template from "../components/Home/Template";

export async function getServerSideProps() {
  const apiUrl = process.env.API_URL;
  const apiKey = process.env.API_KEY;

  //Get most searched breed
  const res = await fetch(`${apiUrl}/breeds?limit=4`, { headers: { "x-api-key": apiKey } });

  const data = await res.json();

  return { props: { data } };
}

export default function Home({ data }) {
  return (
    <>
      <Template data={data} />
    </>
  );
}
