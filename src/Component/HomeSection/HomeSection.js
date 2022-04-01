import React, { useEffect, useState } from "react";
import axios from "axios";
import style from "./HomeSection.module.css";
import MediaCard from "../Card/Card";
import { callAllCharacter, searchCharacters } from "../../Redux/action";
import { useDispatch, useSelector } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";

function HomeSection() {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const [loading, setLoading] = useState(false);

  const character = useSelector((state) => state.character);

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get("https://rickandmortyapi.com/api/character");

      console.log(res.data.results);
      // setCharacter(res.data.results);
    }
    dispatch(callAllCharacter());

    fetchData();
  }, [dispatch]);

  const handleSearchTerm = (e) => {
    setValue(e.target.value);
    setLoading(true);
    dispatch(searchCharacters(e.target.value));

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <>
      <div className={style.inputDiv}>
        <input
          type="text"
          onChange={handleSearchTerm}
          value={value}
          placeholder="Search Character"
        />
        {/* <button className={style.searchButton}>Search</button> */}
      </div>

      {loading ? (
        <div className={style.container1}>
          <CircularProgress size={100} />
        </div>
      ) : character.length > 1 ? (
        <div className={style.container}>
          {character.map((data) => {
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
      ) : (
        <div>
          <h1>No result found for "{value}"</h1>
        </div>
      )}
    </>
  );
}

export default HomeSection;
