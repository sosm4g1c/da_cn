import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import qs from "query-string";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ERROR HANDLER
export const handleError = (error: unknown) => {
  if (error instanceof Error) {
    // This is a native JavaScript error (e.g., TypeError, RangeError)
    console.error(error.message);
    throw new Error(`Error: ${error.message}`);
  } else if (typeof error === "string") {
    // This is a string error message
    console.error(error);
    throw new Error(`Error: ${error}`);
  } else {
    // This is an unknown type of error
    console.error(error);
    throw new Error(`Unknown error: ${JSON.stringify(error)}`);
  }
};

// Placeholder - while image is transforming
const shimmer = (w: number, h: number) =>
  `<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="g">
        <stop stop-color="#7986AC" offset="20%"/>
        <stop stop-color="#68769A" offset="50%"/>
        <stop stop-color="#7986AC" offset="70%"/>
      </linearGradient>
    </defs>
    <rect width="${w}" height="${h}" fill="#7986AC"/>
    <rect id="r" width="${w}" height="${h}" fill="url(#g)"/>
    <animate attributeName="transform" type="translate" from="-${w} 0" to="${w} 0" dur="1s" repeatCount="indefinite" />
  </svg>`;

const toBase64 = (str: string) =>
  typeof window === "undefined"
    ? Buffer.from(str).toString("base64")
    : window.btoa(str);

export const dataUrl = `data:image/svg+xml;base64,${toBase64(
  shimmer(1000, 1000)
)}`;

//from url query
export const formUrlQuery = ({
  searchParams,
  key,
  value,
}: {
  searchParams: URLSearchParams;
  key: string;
  value: string | null;
}) => {
  if (typeof window === "undefined") return ""; // Tránh lỗi trên server

  const params = { ...qs.parse(searchParams.toString()), [key]: value };
  return `${window.location.pathname}?${qs.stringify(params, {
    skipNull: true,
  })}`;
};
