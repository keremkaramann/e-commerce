import React from "react";
import CryptoJS from "crypto-js";

const GravatarImage = ({ email }) => {
  const sha256Email = CryptoJS.SHA256(email.toLowerCase().trim()).toString(
    CryptoJS.enc.Hex
  );

  const gravatarUrl = `https://www.gravatar.com/avatar/${sha256Email}`;

  return (
    <img
      src={gravatarUrl}
      alt="User Gravatar"
      className="rounded-full w-4/12"
    />
  );
};

export default GravatarImage;
