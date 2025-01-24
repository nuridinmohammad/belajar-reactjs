import { useState } from "react";
import Suggestions from "./suggestions";
import { useEffect } from "react";

export default function SearchAutocomplete() {
  const [inputSearch, setInputSearch] = useState("");
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchData() {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();

      if (data && data.users && data.users.length) {
        setData(data.users.map((item) => item.firstName));
        setLoading(false);
        setError(null);
      }
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  }

  function handleChangeValue(e) {
    const value = e.target.value.toLowerCase();
    setInputSearch(value);
    const dataFiltered = data.filter(
      (item) => item.toLowerCase().indexOf(value) > -1
    );
    setFilteredData(dataFiltered);
  }

  function handleClick(event) {
    setInputSearch(event.target.innerText);
    setFilteredData([]);
  }

  useEffect(() => {
    fetchData();
    () => fetchData();
  }, []);

  if (loading) return <span>Loading..</span>;
  if (error !== null) return <h1>{error}</h1>;

  return (
    <div>
      <form>
        <input
          type="text"
          name="search-autocomplete"
          id="search-autocomplete"
          value={inputSearch}
          onChange={handleChangeValue}
        />
      </form>
      <div>
        {loading ? (
          <span>Loading...</span>
        ) : (
          <>
            {filteredData.length <= 0 ? null : (
              <Suggestions
                handleClick={handleClick}
                filteredData={filteredData}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
}
