import { ROLES } from "@/shared/enum/roles";

export interface UserModel {
  id: string;
  name: string;
  email: string;
  password: string;
  isActive: boolean;
  role: ROLES;
  createdAt: Date;
  updatedAt: Date | null;
}
