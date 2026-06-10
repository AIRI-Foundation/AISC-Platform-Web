import { api } from "../lib/api";
import type {
  RegisterRequest,
  LoginRequest,
  SendOtpRequest,
  VerifyOtpRequest,
  AuthData,
} from "../types/api";

// Create a new account The backend doesn't send a token back here
export async function register(body: RegisterRequest): Promise<void> {
  await api.post("/api/Auth/register", body);
}

// Log in with email + password   Returns the token, email and role
export async function login(body: LoginRequest): Promise<AuthData> {
  const res = await api.post("/api/Auth/login", body);
  return res.data.data;
}

// Ask the backend to email a code
export async function sendOtp(body: SendOtpRequest): Promise<void> {
  await api.post("/api/Notifications/send-otp", body);
}

  // Send the code back to confirm the email returns the token, email and role
  export async function verifyOtp(body: VerifyOtpRequest): Promise<AuthData> {
    const res = await api.post("/api/Notifications/verify-email", body);
    return res.data.data;
  }
