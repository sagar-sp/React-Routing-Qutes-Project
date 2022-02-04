import { useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";
import { Route } from "react-router-dom";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
const DUMMY_QUOTES = [
  { id: "q1", author: "Sagar", text: "Learning React is Fun" },
  { id: "q2", author: "abc", text: "React is js library" },
  { id: "q3", author: "xyz", text: "React is open source" },
];
const QuoteDetails = () => {
  const params = useParams();
  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);
  if (!quote) {
    return <p>no quote found</p>;
  }
  return (
    <>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </>
  );
};
export default QuoteDetails;
