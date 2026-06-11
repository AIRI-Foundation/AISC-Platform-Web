// Helpers for saving the login token in the browser.


export function setSession(token: string, email: string, role: string) {
  localStorage.setItem("aisc_token", token);
  localStorage.setItem("aisc_email", email);
  localStorage.setItem("aisc_role", role);
}


export function getToken(): string | null {
  return localStorage.getItem("aisc_token");
}


export function getRole(): string | null {
  return localStorage.getItem("aisc_role");
}

// True if the user is logged in
export function isLoggedIn(): boolean {
  return getToken() !== null;
}

// Remove everything we saved (used when logging out).
export function clearSession() {
  localStorage.removeItem("aisc_token");
  localStorage.removeItem("aisc_email");
  localStorage.removeItem("aisc_role");
}
