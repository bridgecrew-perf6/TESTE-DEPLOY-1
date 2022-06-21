import axios from "axios";
import { useEffect, useRef, useState } from "react";
import {
  SearchBarWrapper,
  Input,
  SearchIcon,
  ResultsContainer,
  UserResult,
  HideTransitionBlock,
} from "../styles/searchbar.style";

export default function SearchBar() {
  const [inputText, setInputText] = useState("");
  const [usersData, setUsersData] = useState([]);

  const [areResultsDisplayed, setAreResultsDisplayed] = useState(false);
  const ref = useRef();

  const handleInput = (e) => setInputText(e.target.value);

  const displayResults = (results) => {
    setUsersData(results);
    setAreResultsDisplayed(results.length > 0);
  };

  useEffect(() => {
    if (inputText.length > 2) {
      axios
        .get(`${process.env.REACT_APP_API_URL}/users`, {
          params: {
            username: inputText,
          },
        })
        .then(({ data }) => displayResults(data))
        .catch(console.dir);
    } else {
      setAreResultsDisplayed(false);
    }
  }, [inputText]);

  useEffect(() => {
    // If the menu is open and the clicked target is not within the menu, then close the menu
    const checkIfClickedOutside = (e) => {
      if (areResultsDisplayed && !ref.current?.contains(e.target))
        setAreResultsDisplayed(false);
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside); // Cleanup the event listener
    };
  }, [areResultsDisplayed]);

  return (
    <SearchBarWrapper ref={ref}>
      <HideTransitionBlock />
      <Input
        minLength={3}
        debounceTimeout={300}
        onChange={handleInput}
        placeholder="Search for people"
      />
      <SearchIcon />
      {areResultsDisplayed && (
        <ResultsContainer>
          {usersData.map((user, index) => (
            <UserResult key={user.username + index}>
              <img src={user.pictureUrl} alt="avatar" />
              <h5>{user.username}</h5>
            </UserResult>
          ))}
        </ResultsContainer>
      )}
    </SearchBarWrapper>
  );
}
