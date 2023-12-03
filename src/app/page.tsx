"use client";
import SearchGame from "./Components/game_creation/SearchGame";
import CreateGame from "./Components/game_creation/CreateGame";

export default function Home() {
  return (
    <main className="p-4">
      <h1
        className="text-4xl font-light text-center uppercase"
      >
        Butter Cheese Eggs
      </h1>
      <div className="flex justify-center gap-4 m-4 items-start h-fit">
        <SearchGame />
        <CreateGame />
      </div>
    </main>
  )
}
