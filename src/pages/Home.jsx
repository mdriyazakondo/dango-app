import axios from "axios";
import React, { memo, useEffect } from "react";
import { useAppContext } from "../Context/GlobalContext";
import { SET_COCKALILS, SET_ERROR, SET_LOADING } from "../Context/reducer";

const Home = () => {
  const { cocktails, error, loading, dispatch } = useAppContext();

  const fetchCocktails = async () => {
    dispatch({ type: SET_LOADING, payload: true });
    try {
      const res = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita`
      );
      console.log(res.data.drinks);

      dispatch({ type: SET_COCKALILS, payload: res.data.drinks });
    } catch (error) {
      dispatch({ type: SET_ERROR, payload: true });
    } finally {
      dispatch({ type: SET_LOADING, payload: false });
    }
  };

  useEffect(() => {
    fetchCocktails();
  }, []);
  return <div></div>;
};

export default memo(Home);
