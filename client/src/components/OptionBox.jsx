import React from 'react';

const OptionBox = ({ options, onOptionClick }) => {












    
  return (
    <div className="option__box">
      {options.map((option, index) => (
        <div key={index}>
          <img
            src={`path/to/your/image/${option.label}.png`} // Update the image path
            alt={`${option.label} Color`}
            onClick={() => {
              // Handle the click event for the selected option
              onOptionClick(option);
            }}
            style={{ cursor: 'pointer' }}
          />
          <span>{option.label}</span>
        </div>
      ))}
    </div>
  );
};

export default OptionBox;
