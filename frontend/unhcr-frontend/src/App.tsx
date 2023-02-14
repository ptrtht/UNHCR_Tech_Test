import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState("Your result will display here");
  const [loading, setLoading] = useState(false);

  const handleKeyDown = async (event: { key: string }) => {
    if (event.key === "Enter") {
      await search();
    }
  };

  const search = async () => {
    console.log(query);
    setLoading(true);
    const response = await axios.post(
      "https://unhcr-be-qty0.vercel.app/unhcr",
      { query: query }
    );

    console.log(response.data);
    
    setLoading(false);
    setResult(response.data.message);
  };

  return (
    <div className="App container-l">
      <div className="card">
        <div className="card-header card-header-light">
          <h3 className="card-title">
            <div className="input-icon in-fx">
              <input
                type="text"
                className="form-control"
                placeholder="Palindrome..?"
                aria-label="Search in website"
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                disabled={loading}
              />
              <a
                className="btn btn-tabler w-100 btn-icon"
                aria-label="Tabler"
                onClick={(e) => {
                  if (!loading) search();
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
                  <path d="M21 21l-6 -6"></path>
                </svg>
              </a>{" "}
            </div>
          </h3>
        </div>
        <div className="card-body">{result}</div>
      </div>
    </div>
  );
}

export default App;
