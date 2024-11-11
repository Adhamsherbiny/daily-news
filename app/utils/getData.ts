import axios from "axios";
export default async function getData() {
  const resultOne = await axios.get(
    "https://newsapi.org/v2/everything?q=apple&from=2024-10-15&to=2024-10-15&sortBy=popularity&apiKey=203b419c3c484293835f919f943ff0cc"
  );
  const resultTwo = await axios.get(
    "https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=hx5y3viP9blbRE9knf5Wy4BgYwNDda18"
  );
  const allData = [...resultOne.data.articles, ...resultTwo.data.results];
  return allData;
}
