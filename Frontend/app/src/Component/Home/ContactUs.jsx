import React, { useState } from "react";
import { Phone, Email } from "@mui/icons-material"; // Importing Material-UI icons
import { TextField } from "@mui/material"; // Importing Material-UI components
import Buttons from "../Button/Buttons";

function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Implement form submission logic here
    console.log("Name:", name);
    console.log("Email:", email);

    setName("");
    setEmail("");
  };

  return (
    <section className="px-4 py-8">
      <div className="container mx-auto bg-[#f1fbf9] py-16 px-4">
        <div className="mb-[60px] text-center">
          <h2 className="text-3xl font-bold mb-4 text-left" style={{ color: '#333333' }}>Let's get in touch!</h2>
          <p className="text-gray-700 mb-6 text-base text-left">
            Our team is here to help. Contact us for quick and friendly support.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-start space-y-4 lg:space-y-0 lg:space-x-8 justify-start items-center">
          {/* Contact Information Section */}
          <div className="flex flex-col justify-start lg:w-1/3 text-center">
            <div className="flex flex-col items-center space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="text-gray-600" />
                <span>+012 345 6789</span>
              </div>
              <div className="flex items-center space-x-2 gap-3">
                <Email className="text-gray-600 " />
                <span>hello@embuddy.com</span>
              </div>
            </div>
          </div>
          {/* Form Section */}
          <form
            onSubmit={handleSubmit}
            className="lg:w-2/3 flex flex-col space-y-4 items-center"
          >
            <TextField
              label="Full Name"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              fullWidth
              sx={{
                borderRadius: 20, // Adjust the border radius as desired
                minWidth: 200, // Adjust the minimum width as per your design
                maxWidth: 300, // Adjust the maximum width as per your design
              }}
              InputProps={{
                startAdornment: <Phone className="text-gray-600" />,
              }}
            />
            <TextField
              label="Email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              fullWidth
              sx={{
                borderRadius: 20, // Adjust the border radius as desired
                minWidth: 200, // Adjust the minimum width as per your design
                maxWidth: 300, // Adjust the maximum width as per your design
              }}
              InputProps={{
                startAdornment: <Email className="text-gray-600" />,
              }}
            />
            <Buttons
              primary
              rounded
              type="submit"
              variant="contained"
              color="primary"
              className="text-white bg-[#10B981]"
            >
              Submit
            </Buttons>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
