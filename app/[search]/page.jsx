import Header from "components/Header";
import InfoCard from "components/InfoCard";
// import { format } from "date-fns";
import dayjs from "dayjs";

const fetchSearchResults = async () => {
  const res = await fetch("https://www.jsonkeeper.com/b/5NPS");
  const searchResults = await res.json();
  // console.log(searchResults);
  return searchResults;
};

async function Search({ searchParams }) {
  const searchResults = await fetchSearchResults();

  const { location, startDate, endDate, noOfGuests } = searchParams;

  // const formattedStartDate = format(startDate, "dd MMM");
  // const formattedEndDate = format(endDate, "dd MMM");

  const formattedStartDate = dayjs(startDate).format("DD MMM");
  const formattedEndDate = dayjs(endDate).format("DD MMM");
  const range = `${formattedStartDate} to ${formattedEndDate}`;

  return (
    <>
      <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`} />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-sm">
            375+ Stays from {range} for {noOfGuests} number of guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>

          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
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