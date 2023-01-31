import { useEffect } from "react";
import Template from "../components/Home/Template";
import { usePopularContext } from "../hooks/usePopularContext";

export async function getStaticProps() {
  const apiUrl = process.env.API_URL;
  const apiKey = process.env.API_KEY;

  const breedsRes = await fetch(`${apiUrl}/breeds`, {
    headers: { "x-api-key": apiKey },
  });

  const breeds = await breedsRes.json();

  const modifiedBreeds = breeds.map(item => ({
    id: item.id,
    name: item.name,
    description: item.description,
    image:JSON.parse(JSON.stringify( {...item.image})),
    vote:0
    }));

  return { props: {  breeds, modifiedBreeds }, revalidate: 300 };
}

export default function Home({ data, breeds, modifiedBreeds }) {
  const { dispatch } = usePopularContext();
  useEffect(() => {
    if (localStorage.getItem("breeds") === null) {
      dispatch({
        type: "INIT_STORE",
        payload: modifiedBreeds,
      });
    }
   
  }, [dispatch, modifiedBreeds]);

  return (
    <>
      <Template data={data} breeds={breeds} />
    </>
  );
}
