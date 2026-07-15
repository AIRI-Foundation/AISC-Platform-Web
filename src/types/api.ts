// The shape of the data we send to the backend, and what comes back.

export interface RegisterRequest {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
  role: number;
  agreeToTerms: boolean;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface SendOtpRequest {
  email: string;
}

export interface VerifyOtpRequest {
  email: string;
  otp: string;
}

export interface VerifyEmailRequest {
  email: string;
  otp: string;
}

// What /login gives back inside data
export interface AuthData {
  token: string;
  refreshToken: string;
  email: string;
  role: string;
}

// Body for POST /api/Company. Only `name` is required by the backend.
export interface AddCompanyRequest {
  name: string;
  description?: string;
  province?: string;
  city?: string;
  industry?: string;
  aiCategory?: string;
  productStage?: string;
  teamSize?: number | null;
  fundingYear?: number | null;
  revenueBand?: string;
  website?: string;
}

export interface ChangePasswordRequest {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export interface sendPasswordResetOtpRequest {
  email: string;
}

export interface PasswordResetRequest {
  email: string;
  NewPassword: string;
  ConfirmPassword: string;
}

export interface BookDemoRequest {
  firstName: string;
  lastName: string;
  businessEmail: string;
  phoneNumber: string;
  describesYou: string;
  companyName: string;
  location: string;
  city: string;
  industry: string;
  aiCategory: string;
  productStage: string;
  teamSize: string;
  fundingYear: string;
  revenueBand: string;
  companyWebsite: string;
  businessChallenge: string;
}

export interface ValidatePasswordRequest {
  password: string;
}

export interface CompanySearchRequest {
    search: string;
    spectrum: string;
    category: string;
    location: string;
    stage: string;
}

export interface Company {
  id: number;

  // Header information
  name: string;
  description: string;
  logoUrl: string;

  // Filter information
  spectrum: "L1" | "L2" | "L3" | "L4" | "L5";
  stage: string;
  location: string;

  // The 2 badges
  categories: string[];

  // Financial information
  revenue: number;
  funding: number;

  // Score
  aiscScore: number;

  // Navigation
  profileLink: string;
}