import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const Verify = () => {
  const { token } = useParams();

  useEffect(() => {
    async function verifyToken() {
      if (token) {
        await axios.post("http://localhost:5000/auth/verify", { token });
      }

      window.location.href = "/login";
    }

    try {
      verifyToken();
    } catch (err) {
      console.log("Verification failed:", err);
    }
  }, [token]);

  return <div>Verifying "{token}"....</div>;
};

export default Verify;
