import Header from "components/Header";
import InfoCard from "components/InfoCard";
import dayjs from "dayjs";

const fetchSearchResults = async () => {
  const res = await fetch("https://www.jsonkeeper.com/b/5NPS");
  const searchResults = await res.json();
  // console.log(searchResults);
  return searchResults;
};

// to make searchParams works...
export const dynamic = "force-dynamic";

async function Search({ searchParams }) {
  const searchResults = await fetchSearchResults();

  const data = searchParams;

  const { location, startDate, endDate, noOfGuests } = data;

  const formattedStartDate = dayjs(startDate).format("DD MMM");
  const formattedEndDate = dayjs(endDate).format("DD MMM");
  const range = `${formattedStartDate} to ${formattedEndDate}`;

  return (
    <>
      <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`} />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-sm">
            375+ Stays from <span className="text-[#5f5ff5]">{range}</span> for{" "}
            <span className="text-[#5f5ff5]">{noOfGuests}</span> number of
            guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in <span className="text-[#5f5ff5]">{location}</span>
          </h1>

          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-500 whitespace-nowrap">
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More filters</p>
          </div>

          <div className="flex flex-col">
            {searchResults.map(
              ({ img, location, title, description, star, price, total }) => (
                <InfoCard
                  key={img}
                  img={img}
                  location={location}
                  title={title}
                  description={description}
                  star={star}
                  price={price}
                  total={total}
                />
              )
            )}
          </div>
        </section>
      </main>
    </>
  );
}

export default Search;
