import React, { useState } from "react";
import { Theme } from "../Theme";
import { FormInput } from "../molecule/FormInput";
import { FormSelect } from "../molecule/FormSelect";
import { apiPostCall } from "../../network/apiCalls";
import { ROUTES } from "../../network/url";
import { Model } from "../organism/Model";

// Regular expression to match email format
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateNumberInRange(number, min, max) {
  if (isNaN(number) || number < min || number > max) {
    // Number is invalid if it is not a number or outside the specified range
    return false;
  }
  return true;
}

const destinations = [
  { id: "001", name: "Africa" },
  { id: "002", name: "Europe" },
  { id: "003", name: "India" },
];

export const AddTraveller = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [destination, setDestination] = useState("India");
  const [travellers, setTravellers] = useState("");
  const [budget, setBudget] = useState("");
  const [error, setError] = useState("{}");
  const [model, showModal] = useState(false);
  const [apiResponse, setApiResponse] = useState({});

  const handleInputChange = (setState) => (event) => {
    if (event.target.type === "text" || "email" || "select") {
      setState(event.target.value);
    } else {
      setState(event.target.elements.number.valueAsNumber);
    }
  };

  const postData = async () => {
    const response = await apiPostCall(ROUTES.TRAVELLERS, {
      name: name,
      email: email,
      destination: destination,
      travellers: travellers,
      budget: budget,
    });
    setApiResponse(response);
  };

  const hanldeSubmit = (event) => {
    event.preventDefault();
    const newErrors = {};
    if (!name || name.length < 3 || /\d/.test(name))
      newErrors.name = "Please enter a name!";
    if (!emailRegex.test(email))
      newErrors.email = "Please enter a valid email!";
    if (!destination) newErrors.destination = "Please choose a destination!";
    if (!validateNumberInRange(travellers, 1, 999))
      newErrors.travellers = "Please provide a valid traveller count!";
    if (!validateNumberInRange(budget, 100, 999999))
      newErrors.budget = "Please provide a tenative budget above $100";

    if (Object.keys(newErrors).length > 0) {
      setError(newErrors);
    } else {
      setError({});
      postData();
      showModal(true);
    }
  };

  const handleClose = () => {
    showModal(false);
    setName("");
    setEmail("");
    setDestination("India");
    setTravellers("");
    setBudget("");
  };

  const message =
    "Name: " +
    apiResponse.name +
    ", Email: " +
    apiResponse.email +
    ", Destination: " +
    apiResponse.destination +
    ", Travellers: " +
    apiResponse.travellers +
    ", Budget: " +
    apiResponse.budget;

  return (
    <Theme>
      {model ? (
        <Model
          title="Added Successfully with following details"
          message={message}
          onClose={handleClose}
        />
      ) : null}
      <div className="bg-home bg-cover bg-center">
        <div className="max-w-xl mx-auto min-h-screen px-4 md:px-0 pt-32">
          <h1 className="mb-8 text-center uppercase text-2xl text-white">
            Traveller Information
          </h1>
          <form onSubmit={hanldeSubmit} className="space-y-4">
            <FormInput
              type="text"
              id="fullName"
              label="Name"
              inputClasses={"p-2 rounded focus:outline-0 md:text-lg"}
              labelClasses={"md:text-lg text-white"}
              value={name}
              onChange={handleInputChange(setName)}
              error={error.name && error.name}
            />

            <FormInput
              type="text"
              id="userEmail"
              label="Email"
              inputClasses={"p-2 rounded focus:outline-0 md:text-lg"}
              labelClasses={"md:text-lg text-white"}
              value={email}
              onChange={handleInputChange(setEmail)}
              error={error.email && error.email}
            />
            <FormSelect
              id="destinations"
              label="Destinations"
              selectClasses={"p-2 rounded focus:outline-0 md:text-lg"}
              labelClasses={"md:text-lg text-white"}
              options={destinations}
              value={destination}
              onChange={handleInputChange(setDestination)}
              error={error.destination && error.destination}
            />
            <FormInput
              type="text"
              id="travellers"
              label="No of Travellers"
              inputClasses={"p-2 rounded focus:outline-0 md:text-lg"}
              labelClasses={"md:text-lg text-white"}
              value={travellers}
              onChange={handleInputChange(setTravellers)}
              error={error.travellers && error.travellers}
            />
            <FormInput
              type="text"
              id="budget"
              label="Budget(USD)"
              inputClasses={"p-2 rounded focus:outline-0 md:text-lg"}
              labelClasses={"md:text-lg text-white"}
              value={budget}
              onChange={handleInputChange(setBudget)}
              error={error.budget && error.budget}
            />
            <FormInput
              type="submit"
              inputClasses={
                "py-2 px-4 mt-4 rounded bg-blue-800 hover:bg-blue-900 text-white"
              }
              labelClasses={"hidden"}
              value="Submit"
              onChange={handleInputChange(setBudget)}
            />
          </form>
        </div>
      </div>
    </Theme>
  );
};
