import React from "react";
import { Suspense } from "react";
import classes from "./page.module.css";
import Link from "next/link";
import MealsGrid from "../../components/meals/meals-grid";
import { getMeals } from "@/lib/meals";

async function MealsLoader() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}

const Meals = () => {
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
        <Suspense
          fallback={
            <p className={classes.loading}>Fetching meals suspense...</p>
          }
        >
          <MealsLoader />
        </Suspense>
      </main>
    </>
  );
};

export default Meals;
