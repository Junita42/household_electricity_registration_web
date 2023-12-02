import React, { useEffect, useState } from "react";

interface EmailValidatorProps {
  showTitle?: boolean;
}

export default function EmailValidator({
  showTitle = false,
}: EmailValidatorProps) {
  const [email, setEmail] = useState<string>("");
  const [emailExists, setEmailExists] = useState<boolean>(false);
  const [isValidated, setIsValidated] = useState<boolean>(false);
  const checkEmail = async () => {
    console.log(`Checking email ${email}...`);
    const response = await fetch("http://127.0.0.1:8000/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });
    const content = await response.json();
    console.log(content);
    setEmailExists(content.is_exist);
  };

  const showValidationResult = (): JSX.Element => {
    if (isValidated) {
      if (emailExists) {
        return <p>Email exists</p>;
      } else {
        return <p>Email does not exist</p>;
      }
    } else {
      return <></>;
    }
  };

  return (
    <div>
      {showTitle ? <h1>Email Validator</h1> : null}
      <input
        type="text"
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
          setIsValidated(false);
        }}
      />
      <button
        onClick={() => {
          checkEmail();
          setIsValidated(true);
        }}
      >
        Validate
      </button>
      <button
        onClick={() => {
          setEmail("");
          setIsValidated(false);
        }}
      >
        Clear
      </button>
      {showValidationResult()}
    </div>
  );
}
