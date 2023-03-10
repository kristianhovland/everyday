import React, { useEffect, useRef, useState } from "react";

import "./DropdownSelect.css";

const Icon = () => {
  return (
    <svg height="20" width="20" viewBox="0 0 20 20">
      <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
    </svg>
  );
};


const Dropdown = ({
  placeHolder,
  options,
  onChange
}) => {
  const [showMenu, setShowMenu] = useState(false);
  const [selectedValue, setSelectedValue] = useState();
  const inputRef = useRef();

 // Show menu when person is selected
  useEffect(() => {
    const handler = (e) => {
      if (inputRef.current && !inputRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    window.addEventListener("click", handler);
    return () => {
      window.removeEventListener("click", handler);
    };
  });

  const handleInputClick = (e) => {
    setShowMenu(!showMenu);
  };

  const getDisplay = () => {
    if (!selectedValue || selectedValue.length === 0) {
      return placeHolder;
    }

    return selectedValue.label || selectedValue;
   
  };

  const removePerson = (person) => {
    return selectedValue.filter((o) => o.value !== person.value);
  };

 
  // update option
  const onItemClick = (person) => {
    let newValue;
    if (newValue) {
      if (selectedValue.findIndex((p) => p.value === person.value) >= 0) {
        newValue = removePerson(person);
      } else {
        newValue = [...selectedValue, person];
      }
    } else {
      newValue = person;
    }
    setSelectedValue(newValue);
    onChange(newValue);
  };

  const isSelected = (person) => {
    if (!selectedValue) {
      return false;
    }

    return selectedValue.value === person.value;
  };

 

  const getPersons = () => {
      return options;
  };

  return (
    <div className="dropdown-container">
      <div ref={inputRef} onClick={handleInputClick} className="dropdown-input">
        <div className="selected-value">{getDisplay()}</div>
        <div className="dropdown-icon">
            <Icon />
        </div>
      </div>
      {showMenu && (
        <div className="dropdown-menu">
          
          {getPersons().map((person) => (
            <div
              onClick={() => onItemClick(person)}
              key={person.value}
              className={`dropdown-item ${isSelected(person) && "selected"}`}
            >
              <img src={person.img} alt={person.label}/>
              {person.label}
             
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
