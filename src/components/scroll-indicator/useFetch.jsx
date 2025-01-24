import { useEffect } from "react";
import { useState } from "react";

export default function useFetch(url = "") {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  async function fetchData() {
    try {
      const response = await fetch(url);
      const result = await response.json();
      if (result && result.products && result.products.length > 0) {
        setData(result.products);
      }
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
    () => fetchData();
  }, [url]);

  return [data, loading, errorMessage];
}
