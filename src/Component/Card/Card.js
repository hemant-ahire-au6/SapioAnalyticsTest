import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import ReactCardFlip from "react-card-flip";
import style from "./Card.module.css";
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useDispatch } from "react-redux";
import { setLikedCharacters, setDislikedCharacters } from "../../Redux/action";
import { useLocation } from "react-router-dom";

export default function MediaCard({
  name,
  status,
  gender,
  species,
  image,
  data,
}) {
  const location = useLocation();

  const dispatch = useDispatch();

  const [flip, setFlip] = useState(false);

  const [like, setLike] = useState(false);

  const handleFlip = () => {
    setFlip(!flip);
  };

  const handleLiked = () => {
    setLike(true);
    dispatch(setLikedCharacters(data));
  };

  const handleDislike = () => {
    dispatch(setDislikedCharacters(data));
  };
  return (
    <>
      {location.pathname === "/Home" ? (
        <ReactCardFlip
          isFlipped={flip}
          flipSpeedFrontToBack="1.2"
          flipSpeedBackToFront="1.2"
        >
          <div className={style.imageSide}>
            <Card sx={{ maxWidth: 300, margin: "1rem" }}>
              <CardMedia
                component="img"
                height="200"
                image={image}
                alt="green iguana"
              />

              <CardActions>
                <Button size="small" onClick={handleLiked}>
                  {like ? (
                    <FavoriteIcon sx={{ color: "red" }} />
                  ) : (
                    <FavoriteIcon sx={{ color: "#D3D3D3" }} />
                  )}
                </Button>
                <Button size="small" onClick={handleFlip}>
                  Details
                </Button>
              </CardActions>
            </Card>
          </div>

          <div className={style.contentSide}>
            <Card
              sx={{
                width: 170,
                margin: "1rem",
                padding: "1rem",
                height: "210px",
                position: "relative",
              }}
            >
              <h1>Name:{name}</h1>
              <h1>Status:{status}</h1>
              <h1>Gender:{gender}</h1>
              <h1>species: {species}</h1>

              <CardActions
                sx={{ position: "absolute", bottom: "0", left: "-5px" }}
              >
                <Button size="small" onClick={handleFlip}>
                  Back
                </Button>
              </CardActions>
            </Card>
          </div>
        </ReactCardFlip>
      ) : (
        <Card sx={{ maxWidth: 300, margin: "1rem" }}>
          <CardMedia
            component="img"
            height="200"
            image={image}
            alt="green iguana"
          />

          <CardActions>
            {/* <Button size="small" onClick={handleLiked}>
              {
                  like?<FavoriteIcon sx={{ color: "red" }}/>:<FavoriteIcon sx={{ color: "#D3D3D3" }}/>
              }
              
          </Button> */}
            <Button size="small" onClick={handleDislike}>
              Dislike
            </Button>
          </CardActions>
        </Card>
      )}
    </>
  );
}
