import React, { useState } from "react";

const SignUp = () => {
  // Declare multiple state variables!
  const [state, setState] = useState({
    name: "",
    country: "",
    bio: "",
    birthDay: "",
  });

  const ChangeHandler = (e) => {
    // console.log(event.target.name);
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const OnSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    setState({ name: "", country: "", bio: "", birthDay: "" });
  };

  const { name, country, bio, birthDay } = state;
  return (
    <div className="col-md-6 offset-md-3 border border-info">
      <h2>React SignUp</h2>
      <input
        className="form-control mt-2"
        type="text"
        name="name"
        value={name}
        placeholder="Enter Your Name"
        onChange={ChangeHandler}
      />
      <select
        className="form-control mt-2"
        name="country"
        value={country}
        id="#"
        onChange={ChangeHandler}
      >
        <option className="mute">Select Your Country</option>
        <option value="Bangladesh">Bangladesh</option>
        <option value="India">India</option>
        <option value="Pakistan">Pakistan</option>
        <option value="China">China</option>
      </select>
      <textarea
        className="form-control mt-2"
        name="bio"
        value={bio}
        id="#"
        cols="30"
        rows="3"
        placeholder="Write Your Bio."
        onChange={ChangeHandler}
      ></textarea>
      <input
        className="form-control mt-2"
        type="date"
        name="birthDay"
        value={birthDay}
        placeholder="Input Your Date of Birth"
        onChange={ChangeHandler}
      />
      <button className="btn btn-primary m-2" type="submit" onClick={OnSubmit}>
        SignUp
      </button>
    </div>
  );
};

export default SignUp;
