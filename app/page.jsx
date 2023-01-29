import SmallCard from "components/SmallCard";
import Banner from "components/Banner";
import data from "../pyp.json";
import MediumCard from "components/MediumCard";
import LargeCard from "components/LargeCard";
import Footer from "components/Footer";

const fetchExploreData = async () => {
  const res = await fetch("https://www.jsonkeeper.com/b/4G1G");
  const exploreData = await res.json();
  // console.log(exploreData);
  return exploreData;
};

const fetchCardsData = async () => {
  const res = await fetch("https://www.jsonkeeper.com/b/VHHT");
  const cardsData = await res.json();
  // console.log(cardsData);
  return cardsData;
};

const fetchlargeCard = async () => {
  const res = await fetch(
    "https://fir-tribute-page-default-rtdb.asia-southeast1.firebasedatabase.app/large.json"
  );
  const largeCard = await res.json();
  // console.log(largeCard);
  return largeCard;
};

async function Home() {
  const exploreData = await fetchExploreData();
  const cardsData = await fetchCardsData();
  const largeCard = await fetchlargeCard();

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
        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -m-3 rounded-xl">
            {cardsData?.map(({ img, title }) => (
              <MediumCard key={img} img={img} title={title} />
            ))}
          </div>
        </section>

        <LargeCard
          img={largeCard.img}
          title={largeCard.title}
          description={largeCard.description}
          buttonText={largeCard.buttonText}
        />
      </main>

      <Footer />
    </>
  );
}
export default Home;
