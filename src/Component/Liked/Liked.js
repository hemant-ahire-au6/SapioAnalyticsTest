import React from "react";
import { useSelector } from "react-redux";
import MediaCard from "../Card/Card";
import style from "./Liked.module.css";

function Liked() {
  const liked = useSelector((state) => state.liked);
  return (
    <div className={style.container}>
      {liked.map((data) => {
        return (
          <MediaCard
            name={data.name}
            gender={data.gender}
            status={data.status}
            species={data.species}
            image={data.image}
            data={data}
            key={data.id}
          />
        );
      })}
    </div>
  );
}

export default Liked;
