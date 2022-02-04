import QuoteList from "../components/quotes/QuoteList";
const DUMMY_QUOTES = [
  { id: "q1", author: "Sagar", text: "Learning React is Fun" },
  { id: "q2", author: "abc", text: "React is js library" },
  { id: "q3", author: "xyz", text: "React is open source" },
];
const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};
export default AllQuotes;
