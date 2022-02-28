import React from "react";
import "./SearchPage.css";
import { useStateValue } from "../stateProvider/StateProvider";
// import { actionTypes } from "../stateProvider/reducer";
import useGoogleSearch from "../useGoogleSearch";
// import Response from "../response";
import Logo from "../Images/googleLogo.png";
import { Link } from "react-router-dom";
import Search from "../components/Search";
import { FaSearch, FaImage, FaNewspaper } from "react-icons/fa";
import { MdLocalOffer } from "react-icons/md";
import { SiGooglemaps } from "react-icons/si";
import { BsThreeDotsVertical } from "react-icons/bs";

function SearchPage() {
  const [{ term = "hi" }, dispatch] = useStateValue();

  // LiVE API call
  const { data } = useGoogleSearch(term);

  // MOCK API Call
  // const data = Response;

  console.log(data);
  return (
    <div className="searchPage">
      <div className="searchPageHeader">
        <Link to="/">
          <img className="searchPageLogo" src={Logo} alt="" />
        </Link>
        <div className="searchPageHeaderBody">
          <Search hideButtons />
          <div className="searchPageOptions">
            <div className="optionsLeft">
              <div className="searchPageOption">
                <FaSearch />
                <Link to="/search">All</Link>
              </div>
              <div className="searchPageOption">
                <FaNewspaper />
                <Link to="/search">News</Link>
              </div>
              <div className="searchPageOption">
                <FaImage />
                <Link to="/search">Images</Link>
              </div>
              <div className="searchPageOption">
                <MdLocalOffer />
                <Link to="/search">Shoping</Link>
              </div>
              <div className="searchPageOption">
                <SiGooglemaps />
                <Link to="/search">Maps</Link>
              </div>
              <div className="searchPageOption">
                <BsThreeDotsVertical />
                <Link to="/search">More</Link>
              </div>
            </div>

            {/* <div className="optionsRight">
              <div className="searchPageOption">
                <Link to="/settings">Settings</Link>
              </div>
              <div className="searchPageOption">
                <Link to="/tools">Tools</Link>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      {true && (
        <div className="searchPageResults">
          <p className="searchPageResultCount">
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime} seconds) for {term}
          </p>
          {data?.items.map((item) => (
            <div className="searchPageResult">
              <a className="searchPageResultLink" href={item.link}>
                {item.pagemap?.cse_image?.length > 0 &&
                  item.pagemap?.cse_image[0]?.src && (
                    <img
                      className="searchPageResultImage"
                      src={item.pagemap?.cse_image[0]?.src}
                      alt=""
                    />
                  )}
                  {item.displayLink} <BsThreeDotsVertical />
              </a>
              <a className="searchPageResultTitle" href={item.link}>
                <p>{item.title}</p>
              </a>
              <p className="searchPageResultSnippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage;
