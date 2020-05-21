import React from "react";

const Button = (props) => {
  return <button style={myStyles.button} 
  {...props}>
  {props.children}
  </button>;
}

const myStyles = {
  button: {
    alignSelf: "center",
    // backgroundColor: "#F96295",
    backgroundColor: "salmon",
    marginLeft: 6,
    marginRight: 6,
    marginBottom: 10,
    marginTop: 5,
    width: "80%",
    borderRadius: 6,
    fontSize: 16,
    paddingTop: 10,
    paddingBottom: 10,
    fontWeight: "bold",
  },
};

export default Button;