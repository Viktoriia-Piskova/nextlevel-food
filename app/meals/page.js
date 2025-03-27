import React from "react";
import classes from "./page.module.css";
import Link from "next/link";
import MealsGrid from "../../components/meals/meals-grid";
import { getMeals } from "@/lib/meals";

const Meals = () => {
  const meals = getMeals();
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals <span className={classes.highlight}>for you</span>
        </h1>
        <p>Choose your recipe</p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share your favourite recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <MealsGrid meals={meals} />
      </main>
    </>
  );
};

export default Meals;
