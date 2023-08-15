import React, {useState} from "react";
import './Form.css'
import { useHistory } from "react-router-dom";

interface FormProps {
  onSearch: (query: string) => void;
}

const Form: React.FC<FormProps> = ({ onSearch }) => {
  console.log("Form component loaded");
  const [boardGame, setBoardGame] = useState("");
  const history = useHistory()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(boardGame)
    history.push("./ind-games")
  };

  return (
    <form className="form-selection" onSubmit={(event) => handleSubmit(event)}>
      <label htmlFor="boardGame">Search Board Games: </label>
      <input
        id="searchInput"
        type="text"
        placeholder="Search games..."
        value={boardGame}
        onChange={(event) => setBoardGame(event.target.value)}
      ></input>
    </form>
  );
};

export default Form