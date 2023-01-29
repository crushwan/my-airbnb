import SmallCard from "components/SmallCard";
import Banner from "components/Banner";
import data from "../pyp.json";

const fetchExploreData = async () => {
  const res = await fetch("https://www.jsonkeeper.com/b/4G1G");
  const exploreData = await res.json();
  // console.log(exploreData);
  return exploreData;
};

async function Home() {
  const exploreData = await fetchExploreData();

  return (
    <>
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map(({ img, location, distance }) => (
              <SmallCard
                key={img}
                img={img}
                location={location}
                distance={distance}
              />
            ))}
          </div>
        </section>
        <section></section>
      </main>
    </>
  );
}
export default Home;
