export type UserRole = "student" | "lecturer";

export interface User {
  id: string;
  email: string;
  username: string;
  role: UserRole;
  program: string;
  avatar?: string;
}
