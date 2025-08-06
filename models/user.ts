export interface User {
  username: string;
  role: "admin" | "user";
  googleId: string;
  name: string;
  avatarURL?: string;
}
