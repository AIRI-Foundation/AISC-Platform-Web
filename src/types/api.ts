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

// Raw shape returned by GET /api/Directory/search and GET /api/Directory/{id}.
// Fields are null when the company doesn't have a full public profile yet
// (Level 1-2, or Level 3 without AISC certification) - see backend
// SpectrumHelper.HasFullProfile / DirectoryMapper for the masking rule.
export interface DirectoryCompanyDto {
  id: string;
  name: string | null;
  description: string | null;
  logoUrl: string | null;
  website: string | null;
  city: string;
  province: string;
  categoryTag: string;
  isVerified: boolean;
  hasFullProfile: boolean;
  levelBadge: string | null;
  certificationBadge: string | null;
  stage: string | null;
  annualRevenue: number | null;
  fundingRaised: number | null;
  aiscScore: number | null;
}

// Raw shape returned by GET /api/Directory/filters.
export interface DirectoryFiltersDto {
  totalCount: number;
  countsByLevel: Record<string, number>;
  categories: string[];
  locations: string[];
  stages: string[];
}

export interface Company {
  id: string;

  // Header information
  name: string;
  description: string;
  logoUrl: string;

  // Whether this card shows full details, or is locked to category-only
  // (Level 1-2, or Level 3 without AISC certification).
  hasFullProfile: boolean;
  isVerified: boolean;

  // Filter information
  levelBadge: string | null;
  stage: string;
  location: string;

  // Badges shown under the name, e.g. ["AISC Certified", "NLP · Health"]
  categories: string[];

  // Financial information
  revenue: number;
  funding: number;

  // Score
  aiscScore: number;

  // Navigation
  profileLink: string;
}
