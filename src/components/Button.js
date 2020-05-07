import React from 'react';

const Button = (props) => {
  return (
    <button style={myStyles.button} type="submit">
        {props.text}
    </button>
    );
  };

  const myStyles = {
      button: {
          alignSelf: "center",
          backgroundColor: "#ff62a1",
          marginLeft: 5,
          marginRight: 5,
          marginBottom: 10,
          marginTop: 5,
          width: "50%",
          borderRadius: 10,
          fontSize: 16,
          paddingTop: 10,
          paddingBottom: 10,
      },
  };

  export default Button;