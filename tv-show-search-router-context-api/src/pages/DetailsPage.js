import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import defaultImg from "../images/no-image-available-grid.jpg";

//Contect
import ShowsContext from "../context/shows/showsContext";

const DetailsPage = ({ match }) => {
  const { getSingleShow, singleShow, loading } = useContext(ShowsContext);

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
        <h2>Loading...</h2>
      ) : (
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
              {singleShow.rating.average
                ? singleShow.rating.average
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
      )}
    </>
  );
};

export default DetailsPage;

const Details = styled.div``;
