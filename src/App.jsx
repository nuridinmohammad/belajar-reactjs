// import "./App.css";
// import "./index.css";
// import Accordion from "./components/accordion";
// import RandomColor from "./components/random-color";

import ImageSlider from "./components/image-slider";

// import StarRating from "./components/start-rating";

function App() {
  return (
    <div className="App">
      {/* <Accordion /> */}
      {/* <RandomColor /> */}
      {/* <StarRating noOfStars={10} /> */}

      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      />
    </div>
  );
}

export default App;
