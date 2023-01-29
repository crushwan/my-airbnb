import { format } from "date-fns";
import Header from "components/Header";

function Search({ searchParams }) {
  const { location, startDate, endDate, noOfGuests } = searchParams;

  const formattedStartDate = format(new Date(startDate), "dd MMM");
  const formattedEndDate = format(new Date(endDate), "dd MMM");
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
        </section>
      </main>
    </>
  );
}

export default Search;
