import { useState } from "react";

export default function GithubProfileFinder() {
  const [data, setData] = useState(null);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  async function fetchData() {
    setLoading(true);
    const response = await fetch(`https://api.github.com/users/${input}`);
    const result = await response.json();
    if (result) {
      setData(result);
      setLoading(false);
    } else {
      setLoading(false);
    }
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" onClick={fetchData}>
          Search
        </button>
      </form>
      {loading ? (
        <span>Loading..</span>
      ) : (
        <>
          {data === null ? (
            <span>No data.</span>
          ) : (
            <div>
              <img src={data?.avatar_url} alt={data?.login} />
              <h1>{data?.login}</h1>
            </div>
          )}
        </>
      )}
    </div>
  );
}
