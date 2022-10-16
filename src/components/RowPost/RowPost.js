import React, { useEffect, useState } from "react";
import Youtube from "react-youtube";
import "./RowPost.css";
import axios from "../../axios";
import { imageURL, API_KEY } from "../../constants/constants";

function RowPost(props) {
  const [movies, setMovies] = useState([]);
  const [urlId, setUrlId] = useState('')
  useEffect(() => {
    axios
      .get(props.url)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleMovie = (id) => {
    axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response) => {
        console.log(response.data);
        if(response.data.results.length !== 0){
            setUrlId(response.data.results[0])
        }else{
            console.log("array not found!");
        }
    }).catch((err)=>{
        console.log(err);
    })
  }

  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj, index) => (
          <img onClick={()=>handleMovie(obj.id)}
            className={props.isSmall ? "small-posters" : "poster"}
            key={index}
            src={`${imageURL + obj.backdrop_path}`}
            alt="poster"
          />
        ))}
      </div>
      {urlId && <Youtube opts={opts} videoId={urlId.key}/>}
    </div>
  );
}

export default RowPost;
