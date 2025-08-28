import type { UserCredentials } from "../types";
import { api } from "./client";

// Auth service
export const login = async (credentials: UserCredentials) => api.post("/auth/login", credentials);
