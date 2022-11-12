import { Permission } from "./permission.entity";

export type CreatePermissionDto = Pick<
  Permission,
  "name" | "description" | "permission"
>;

export type UpdatePermissionDto = Pick<Permission, "name" | "description">;
