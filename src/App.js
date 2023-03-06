import DropdownSelect from "./DropdownSelect.js";
import "./index.css";
import { useCallback, useEffect } from 'react';

export default function App() {
  const options = [
    { value: "winstonchurchill", label: "Winston Churchill", img: "https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425__340.png" },
    { value: "davidbeckham", label: "David Beckham", img: "https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425__340.png" },
    { value: "selinagomez", label: "Selina Gomez", img: "https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425__340.png" },
    { value: "gandalfgrey", label: "Gandalf the Grey", img: "https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425__340.png" },
    { value: "jessepinkman", label: "Jesse Pinkman", img: "https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425__340.png" },
    { value: "johntravolta", label: "John Travolta", img: "https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425__340.png" },
    { value: "siverthøyem", label: "Sivert Høyem", img: "https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425__340.png" },
  ];

  const handleKeyPress = useCallback((event) => {
    console.log(`Key pressed: ${event.key}`);
  }, []);

  useEffect(() => {
    // attach the event listener
    document.addEventListener('keydown', handleKeyPress);

    // remove the event listener
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <div className="main">
      <h1 className="everyday">Everyday Dropdown Case</h1>
      <DropdownSelect
        placeHolder="Select a person"
        options={options}
        onChange={(value) => console.log(value)}
      />

    </div>
  );
}

// Axios, react-Fetch-hook
// Img på selected state
// Shortcuts
