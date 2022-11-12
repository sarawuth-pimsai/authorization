import { Page } from "../common/page.entity";
import { Permission, PermissionID } from "./permission.entity";

export interface PermissionQueryRepository {
  get: (id: PermissionID) => Promise<Permission>;
  getByIDs: (ids: PermissionID[]) => Promise<Permission[]>;
  list: (page: Page) => Promise<Permission[]>;
}
