import { useEffect, useState } from "react";
import Card from "../components/Card";
import Header from "../components/Header";

export default function ShowList() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((response) => response.json())
      .then((data) => setShows(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="bg-blue-50">
      <Header> </Header>
      <section className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-10">
        {shows.map((show) => (
          <Card key={show.show.id} data={show.show} />
        ))}
      </section>
    </div>
  );
}
