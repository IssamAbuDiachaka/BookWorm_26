function required(key: string): string {
  const value = process.env[key];
  if (value === undefined || value === "") {
    throw new Error(`Missing required env: ${key}`);
  }
  return value;
}

function optional(key: string, fallback: string): string {
  return process.env[key] ?? fallback;
}

export const env = {
  NODE_ENV: optional("NODE_ENV", "development"),
  PORT: parseInt(optional("PORT", "4000"), 10),
  MONGO_URI: optional("MONGO_URI", ""),
  JWT_ACCESS_SECRET: optional("JWT_ACCESS_SECRET", "change-me-access-secret"),
  JWT_REFRESH_SECRET: optional("JWT_REFRESH_SECRET", "change-me-refresh-secret"),
  JWT_ACCESS_EXPIRES_IN: optional("JWT_ACCESS_EXPIRES_IN", "15m"),
  JWT_REFRESH_EXPIRES_IN: optional("JWT_REFRESH_EXPIRES_IN", "7d"),
  FRONTEND_URL: optional("FRONTEND_URL", "http://localhost:5173"),
  CLOUDINARY_CLOUD_NAME: optional("CLOUDINARY_CLOUD_NAME", ""),
  CLOUDINARY_API_KEY: optional("CLOUDINARY_API_KEY", ""),
  CLOUDINARY_API_SECRET: optional("CLOUDINARY_API_SECRET", ""),
} as const;

export function requireEnv(keys: (keyof typeof env)[]): void {
  for (const key of keys) {
    if (!env[key] && (key === "MONGO_URI" || key.startsWith("JWT_"))) {
      throw new Error(`Missing required env: ${key}`);
    }
  }
}
