export interface User {
  id: string;
  username: string;
  role: "admin" | "user";
  googleId: string;
  name: string;
  avatarURL?: string;
}
