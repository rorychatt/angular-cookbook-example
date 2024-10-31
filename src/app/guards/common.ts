import { Roles } from '../models';

export const isAdmin = (role: Roles) => role === Roles.Admin;
