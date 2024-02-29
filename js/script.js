"use strict";

import { cardProduct } from "../components/cardProduct.js";
import { userCard } from "../components/userCard.js";
import { getData } from "../store/fetchApi.js";

const renderArea = document.querySelector("#render-area");
const cardProduct1 = await getData("products");

const userCards = document.querySelector("#User");
const cardProduct2 = await getData("user");

cardProduct1.map((product) => {
  renderArea.innerHTML += cardProduct(product);
});

cardProduct2.map((user) => {
  userCards.innerHTML += userCard(user);
});
