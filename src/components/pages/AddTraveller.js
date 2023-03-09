import React, { useState } from "react";
import { Theme } from "../Theme";
import { FormInput } from "../molecule/FormInput";
import { FormSelect } from "../molecule/FormSelect";
import { apiPostCall } from "../../network/apiCalls";
import { ROUTES } from "../../network/url";

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
    console.log(response);
  };

  const hanldeSubmit = (event) => {
    event.preventDefault();
    // console.log(name, email, travellers, budget, destination);
    postData();
  };

  return (
    <Theme>
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
            />
            <FormInput
              type="email"
              id="userEmail"
              label="Email"
              inputClasses={"p-2 rounded focus:outline-0 md:text-lg"}
              labelClasses={"md:text-lg text-white"}
              value={email}
              onChange={handleInputChange(setEmail)}
            />
            <FormSelect
              id="destinations"
              label="Destinations"
              selectClasses={"p-2 rounded focus:outline-0 md:text-lg"}
              labelClasses={"md:text-lg text-white"}
              options={destinations}
              value={destination}
              onChange={handleInputChange(setDestination)}
            />
            <FormInput
              type="number"
              id="travellers"
              label="No of Travellers"
              inputClasses={"p-2 rounded focus:outline-0 md:text-lg"}
              labelClasses={"md:text-lg text-white"}
              value={travellers}
              onChange={handleInputChange(setTravellers)}
            />
            <FormInput
              type="number"
              id="budget"
              label="Budget(USD)"
              inputClasses={"p-2 rounded focus:outline-0 md:text-lg"}
              labelClasses={"md:text-lg text-white"}
              value={budget}
              onChange={handleInputChange(setBudget)}
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
