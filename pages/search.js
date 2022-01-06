import { format } from "date-fns";
import { useRouter } from "next/router";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Search() {
  const router = useRouter();
  const { location, startDate, endDate, NoOfguests } = router.query;

  const formattedStartDate = format(new Date(startDate), " dd MMM yyyy");
  const formattedEndDate = format(new Date(endDate), " dd MMM yyyy");
  const range = `${formattedStartDate} to ${formattedEndDate}`;

  return (
    <div>
      <Header placeholder={`${location}|${range}|For ${NoOfguests} people`} />
      <main className="flex">
        <section
          className="flex-gr
        pt-14 px-6"
        >
          <p className="text-xs">
            300+ Stays-{range}- for {NoOfguests} number of guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location.toLocaleUpperCase()}
          </h1>
          <div className=" hidden  space-x-4 my-4  lg:inline-flex whitespace-nowrap">
            <p className="btn">Cancellation Flexibility</p>
            <p className="btn">Type of Place</p>
            <p className="btn">Price</p>
            <p className="btn">Rooms and Beds</p>
            <p className="btn">More Filters</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Search;
