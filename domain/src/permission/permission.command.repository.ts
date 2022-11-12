import { CreatePermissionDto, UpdatePermissionDto } from "./permission.dto";
import { PermissionID } from "./permission.entity";

export interface PermissionCommandRepository {
  create: (permission: CreatePermissionDto) => Promise<boolean>;
  update: (
    id: PermissionID,
    permission: UpdatePermissionDto
  ) => Promise<boolean>;
  delete: (id: PermissionID) => Promise<boolean>;
}
