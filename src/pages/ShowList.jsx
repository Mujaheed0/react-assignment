import { useEffect, useState } from "react";
import Card from "../components/Card";
import Header from "../components/Header";
import SkeletonImage from "../components/SkeletonImage";
export default function ShowList() {
  const [shows, setShows] = useState([]);
  const fetchShows = async () => {
    try {
      const response = await fetch(`https://api.tvmaze.com/search/shows?q=all`);
      const data = await response.json();
      setShows(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchShows();
  }, []);

  return (
    <div className="bg-blue-50">
      <Header> </Header>
      <section className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-10">
        {shows.length !== 0 ? (
          shows.map((show) => <Card key={show.show.id} data={show.show} />)
        ) : (
          <>
            <SkeletonImage></SkeletonImage>
            <SkeletonImage></SkeletonImage>
            <SkeletonImage></SkeletonImage>
            <SkeletonImage></SkeletonImage>
          </>
        )}
      </section>
    </div>
  );
}
