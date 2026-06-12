import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { sendPasswordResetOtp } from "../services/authService";
import { getErrorMessage } from "../lib/api";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const [formData, setForm] = useState({
    email: "",
  });  
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    setError(null);
    setLoading(true);

    try {
      await sendPasswordResetOtp(formData);

      navigate("/reset-password", {
        state: { email },
      });
    } catch (err) {
      setError(getErrorMessage(err));
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Forgot Password</h1>

      <input
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={(e) =>
          setForm({ ...formData, email: e.target.value })
        }
      />

      <button type="submit" disabled={loading}>
        {loading
          ? "Sending..."
          : "Email Password Reset"}
      </button>
      <br></br>
      <button
        type="button"
        onClick={() => navigate(-1)}
      >
        Go Back
      </button>

      <p>
        Don't have an account?{" "}
        <Link to="/signup">
          Sign Up
        </Link>
      </p>

      {error && (
        <p style={{ color: "red" }}>
          {error}
        </p>
      )}
    </form>
  );
};

export default ForgotPassword;