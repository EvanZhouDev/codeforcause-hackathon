"use client";
import Icon from "./components/icon.jsx";

export default function Home() {
  // return a good variety of 10 different daisy ui components like buttons, sliders, toggles, and more, all laid out so i can see if my color theme is good
  return (
    <>
      <a class="btn btn-filled mx-1">
        <span class="material-symbols-outlined">house</span>
        Filled
      </a>
      <a class="btn btn-clear mx-1">Clear</a>
      <a class="btn btn-ghost mx-1">
        <Icon.Rounded name="mail" />
        Outline
      </a>
      <a class="btn btn-classic mx-1">
        <Icon.Rounded name="tag" />
        Classic
      </a>
      <a class="btn btn-shadow mx-1">
        <Icon.Rounded name="add" />
        Shadow
      </a>
    </>
  );
}
