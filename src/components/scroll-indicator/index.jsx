import useFetch from "./useFetch";
import useScroll from "./useScroll";
import "./style.css";

export default function ScrollIndicator() {
  const [products, loading, errorMessage] = useFetch(
    "https://dummyjson.com/products?limit=100"
  );
  const scrollPercentage = useScroll();

  if (loading) return <span>Loading...</span>;
  if (errorMessage !== null) return <span>{errorMessage}</span>;

  return (
    <div>
      <div className="top-container">
        <h1>Custom Scroll Indicator</h1>
        <div className="scroll-progress-tracking-container">
          <div
            className="current-progress-bar"
            style={{ width: `${scrollPercentage}%` }}
          ></div>
        </div>
      </div>
      <div className="data-container">
        {products && products.length > 0
          ? products.map((dataItem) => (
              <p key={dataItem.id}>{dataItem.title}</p>
            ))
          : null}
      </div>
    </div>
  );
}
