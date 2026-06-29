import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

export const OverviewIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <rect x="3" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="3" width="7" height="7" rx="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" />
    <rect x="14" y="14" width="7" height="7" rx="1" />
  </svg>
);

export const MilestoneIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="m9 11 2 2 4-4" />
  </svg>
);

export const ProfileIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21a8 8 0 0 1 16 0" />
  </svg>
);

export const AdvisoryIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <circle cx="9" cy="8" r="3.5" />
    <path d="M2.5 20a6.5 6.5 0 0 1 13 0" />
    <path d="M16 5.5a3.5 3.5 0 0 1 0 6.8" />
    <path d="M18 14a6.5 6.5 0 0 1 3.5 6" />
  </svg>
);

export const SettingsIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

export const SearchIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <circle cx="11" cy="11" r="7" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);

export const BellIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.7 21a2 2 0 0 1-3.4 0" />
  </svg>
);

export const ChevronDownIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export const LogoutIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
    <path d="m16 17 5-5-5-5" />
    <path d="M21 12H9" />
  </svg>
);

export const TrendingUpIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="m3 17 6-6 4 4 7-7" />
    <path d="M17 8h4v4" />
  </svg>
);

export const CheckCircleIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="m8.5 12 2.5 2.5 5-5" />
  </svg>
);

export const EyeIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

export const CalendarIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <path d="M3 10h18M8 2v4M16 2v4" />
  </svg>
);

export const ArrowRightIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const CheckIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export const ClockIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

export const AlertIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 8v4M12 16h.01" />
  </svg>
);

export const LockIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <rect x="4" y="11" width="16" height="10" rx="2" />
    <path d="M8 11V7a4 4 0 0 1 8 0v4" />
  </svg>
);

export const ClosedEyeIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <circle cx="12" cy="12" r="3" />
  <path d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
</svg>
);

export const RightArrowHeadIcon = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M5 6l6 6-6 6" />
  </svg>
);

export const GovernmentIcon = (props: IconProps) => (
  <svg {...base} {...props} stroke-width="1.5" >
    <path d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
  </svg>
);

export const CorporationIcon = (props: IconProps) => (
  <svg {...base} {...props} stroke-width="1.5" transform="translate(2 2) scale(1.2)">
    <path d="M14.085 5.08496V4.90496C14.085 2.51909 12.1508 0.584961 9.76498 0.584961H9.40498C7.01909 0.584961 5.08496 2.51909 5.08496 4.90496V5.08496"/>
    <path d="M0.584961 5.08496H18.585V18.585H0.584961V5.08496Z"/>
    <path d="M9.58496 9.13496V7.33496"/>
    <path d="M9.58496 16.3352V14.5352"/>
    <path d="M11.6095 10.4848V10.0348C11.6095 9.5377 11.2066 9.13477 10.7095 9.13477H8.45954C7.96247 9.13477 7.55957 9.5377 7.55957 10.0348V10.4378C7.55957 10.8596 7.85258 11.2248 8.26433 11.3164L10.9048 11.9032C11.3166 11.9947 11.6095 12.3599 11.6095 12.7817V13.6348C11.6095 14.1318 11.2066 14.5348 10.7095 14.5348H8.45954C7.96247 14.5348 7.55957 14.1318 7.55957 13.6348V13.1848"/>
  </svg>
);

export const InformationIcon = (props: IconProps) => (
<svg {...base} {...props}>
 <circle cx="12" cy="12" r="9" />
<path d="M12 16V12" />
<path d="M12 8H11.99" />
</svg>
);

export const SecurityIcon = (props: IconProps) => (
<svg {...base} {...props}>
  <path d="M7 16C7 16 13 13 13 8.5V3.25L7 1L1 3.25V8.5C1 13 7 16 7 16Z"/>
</svg>
);

export const CreditCardIcon = (props: IconProps) => (
<svg {...base} {...props}>
  <path d="M0.75 5.5H17.25M2.25 1H15.75C16.5784 1 17.25 1.67157 17.25 2.5V11.5C17.25 12.3284 16.5784 13 15.75 13H2.25C1.42157 13 0.75 12.3284 0.75 11.5V2.5C0.75 1.67157 1.42157 1 2.25 1Z"/>
</svg>
);

export const PencilEditIcon = (props: IconProps) => (
<svg {...base} {...props} stroke-width="0.2" fill="none" >
  <path d="M3.33333 12.6667H4.28333L10.8 6.15L9.85 5.2L3.33333 11.7167V12.6667ZM2 14V11.1667L10.8 2.38333C10.9333 2.26111 11.0806 2.16667 11.2417 2.1C11.4028 2.03333 11.5722 2 11.75 2C11.9278 2 12.1 2.03333 12.2667 2.1C12.4333 2.16667 12.5778 2.26667 12.7 2.4L13.6167 3.33333C13.75 3.45556 13.8472 3.6 13.9083 3.76667C13.9694 3.93333 14 4.1 14 4.26667C14 4.44444 13.9694 4.61389 13.9083 4.775C13.8472 4.93611 13.75 5.08333 13.6167 5.21667L4.83333 14H2ZM10.3167 5.68333L9.85 5.2L10.8 6.15L10.3167 5.68333Z" fill="black"/>
</svg>
);

export const XIcon = (props: IconProps) => (
<svg {...base} {...props} stroke-width="0.2" fill="none" >
  <path d="M11.75 0.75L0.75 11.75M0.75 0.75L11.75 11.75" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
);



