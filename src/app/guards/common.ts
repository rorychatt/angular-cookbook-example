import { Roles } from '../models';

export const isAdminRole = (role: Roles) => role === Roles.Admin;
