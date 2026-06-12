import { changePassword } from "../services/authService";
import { getErrorMessage } from "../lib/api";
import { useState } from "react";

const ChangePassword = () => {
  const [formData, setForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setLoading(true);

    if (formData.newPassword !== formData.confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    try {
      const res = await changePassword(formData);

      if (res.successful) {
        setSuccess(res.message || "Password updated successfully");
      } else {
        setError(res.message || "Failed to update password");
      }
    } catch (err) {
      setError(getErrorMessage(err));
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="password"
        placeholder="Current password"
        value={formData.currentPassword}
        onChange={(e) =>
          setForm({ ...formData, currentPassword: e.target.value })
        }
      />

      <input
        type="password"
        placeholder="New password"
        value={formData.newPassword}
        onChange={(e) =>
          setForm({ ...formData, newPassword: e.target.value })
        }
      />

      <input
        type="password"
        placeholder="Confirm password"
        value={formData.confirmPassword}
        onChange={(e) =>
          setForm({ ...formData, confirmPassword: e.target.value })
        }
      />

      <button disabled={loading} type="submit">
        {loading ? "Updating..." : "Update Password"}
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}
    </form>
  );
};
export default ChangePassword;