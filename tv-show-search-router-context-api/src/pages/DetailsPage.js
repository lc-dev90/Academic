import React, { useEffect, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";

//Components
import defaultImg from "../images/no-image-available-grid.jpg";
import Loader from "../components/Loader";

//Contect
import ShowsContext from "../context/shows/showsContext";

const DetailsPage = ({ match }) => {
  const { getSingleShow, singleShow, loading } = useContext(ShowsContext);
  const history = useHistory();
  const removeTags = (text) => {
    if (text === null || text === "") {
      return false;
    } else {
      text = text.toString();
    }
    return text.replace(/(<([^>]+)>)/gi, "");
  };

  useEffect(() => {
    getSingleShow(match.params.id);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Details>
            <img
              src={singleShow.image ? singleShow.image.medium : defaultImg}
              alt={singleShow.name}
            />
            <div className="details-info">
              <h1>{singleShow.name}</h1>
              {singleShow.genres &&
                singleShow.genres.map((genre) => (
                  <span key={genre} className="singleshow-genre">
                    {genre}
                  </span>
                ))}
              <p>
                <strong>Status:</strong>
                {singleShow.status && singleShow.status}
              </p>
              <p>
                <strong>Rating:</strong>
                {singleShow.rating
                  ? singleShow.rating.average
                    ? singleShow.rating.average
                    : "No rating"
                  : "No rating"}
              </p>
              <p>
                <strong>Official Site:</strong>
                {singleShow.officialSite ? (
                  <a
                    href={singleShow.officialSite}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {singleShow.officialSite}
                  </a>
                ) : (
                  "No official site"
                )}
              </p>
              <p>{singleShow.summary && removeTags(singleShow.summary)}</p>
            </div>
          </Details>
          <Link>
            <Button onClick={() => history.goBack()}>Back</Button>
          </Link>
        </>
      )}
    </>
  );
};

export default DetailsPage;

const Button = styled.button`
  padding: 10px 27px;
  border: 1px solid black;
  border-radius: 3px;
  color: white;
  background: #171717;
  font-size: 0.7rem;
  text-transform: uppercase;
  cursor: pointer;
`;

const Details = styled.div`
  display: flex;
  margin: 2rem 0;
  img {
    margin-right: 2rem;
  }
  .details-info {
    p {
      margin: 1rem 0;
    }
  }
  .singleshow-genre {
    display: inline-block;
    border-radius: 15px;
    margin: 0.5rem 1rem 0.5rem 0;
    padding: 10px 17px;
    background: rgb(4, 147, 114);
    color: white;
  }
`;
