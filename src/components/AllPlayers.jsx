import React from "react";
import { useState, useEffect } from "react";
import { fetchPlayers } from "../API/ajaxHelpers";

function AllPlayers() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    async function getPlayers() {
      try {
        const playersData = await fetchPlayers();
        setPlayers(playersData);
      } catch (error) {
        console.error("failed to fetch players:", error);
      }
    }
    getPlayers();
  }, []);

  return (
    <div>
      <h1>All Players</h1>
      <ul>
        {players.map((player) => (
          <li key={player.id}>{player.name}</li>
        ))}
      </ul>
    </div>
  );
}
export default AllPlayers;
