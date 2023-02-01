export default async function handler(req, res) {
  if (req.method === "GET") {
    //Constants
    const apiUrl = process.env.API_URL;
    const apiKey = process.env.API_KEY;
    const { id } = req.query;

    try {
      //Get breed photos
      const photosResponse = await fetch(
        `${apiUrl}/images/search?limit=8&breed_ids=${id}`,
        { headers: { "x-api-key": apiKey } }
      );
      const photos = await photosResponse.json();

      res.status(200).json({ photos });
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch data from catAPI." });
    }
  }
}
