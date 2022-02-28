import React, { useState } from "react";
import "./Search.css";
import { FaSearch, FaMicrophone } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../stateProvider/StateProvider";
import { actionTypes } from "../stateProvider/reducer";

function Search({ hideButtons = false }) {
  const [{}, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const search = (e) => {
    e.preventDefault();
    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });
    navigate("/search");
  };

  const dummy = (e) => {
    e.preventDefault();
  };

  return (
    <form>
      <div className="searchContainer">
        <FaSearch className="icon" />
        <input
          type="text"
          placeholder="Search Google or type a URL"
          id="search"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <FaMicrophone className="icon" />
      </div>

      {!hideButtons ? (
        <div className="btnContainer">
          <button className="btn" onClick={search}>
            Google Search
          </button>
          <button className="btn" onClick={dummy}>
            I'm Fealing Lucky
          </button>
        </div>
      ) : (
        <div className="btnContainer">
          <button className="btnHidden" onClick={search}>
            Google Search
          </button>
          <button className="btnHidden" onClick={dummy}>
            I'm Fealing Lucky
          </button>
        </div>
      )}
    </form>
  );
}

export default Search;
