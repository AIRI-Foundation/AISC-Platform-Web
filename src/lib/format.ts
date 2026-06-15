export function getGreeting(): string {
  const hour = new Date().getHours();
  if (hour < 12) return "Good morning";
  if (hour < 18) return "Good afternoon";
  return "Good evening";
}

export function getInitials(firstName: string, lastName: string): string {
  const first = firstName ? firstName[0] : "";
  const last = lastName ? lastName[0] : "";
  return (first + last).toUpperCase();
}

export function formatMemberSince(value: string): string {
  if (!value) return "";
  const date = new Date(value);
  return date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
}

export function formatRelativeTime(value: string): string {
  const then = new Date(value).getTime();
  const seconds = Math.floor((Date.now() - then) / 1000);

  if (seconds < 60) return "Just now";

  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return minutes + "m ago";

  const hours = Math.floor(minutes / 60);
  if (hours < 24) return hours + "h ago";

  const days = Math.floor(hours / 24);
  if (days === 1) return "Yesterday";
  return days + " days ago";
}
