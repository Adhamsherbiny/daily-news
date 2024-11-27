/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios"
export default async function GetData({fromDate , toDate} : any) {
  fromDate = "2024-11-26"
  toDate = "2024-11-26"
  const resultOne = await axios.get(
    `https://newsapi.org/v2/everything?q=apple&from=${fromDate}&to=${toDate}&sortBy=popularity&apiKey=203b419c3c484293835f919f943ff0cc`
  );
  const resultTwo = await axios.get(
    "https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=hx5y3viP9blbRE9knf5Wy4BgYwNDda18"
  );
  const allData = [...resultOne.data.articles, ...resultTwo.data.results];
  console.log(allData);
  return allData;
}