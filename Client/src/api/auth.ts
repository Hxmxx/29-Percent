import { client } from './client';

interface SignUpRequest {
  email: string;
  password: string;
  name: string;
}

interface LoginRequest {
  email: string;
  password: string;
}

interface LoginResponse {
  token: string;
}

interface UserResponse {
  id: string;
  email: string;
  name: string;
}

export const authApi = {
  signup: async (data: SignUpRequest): Promise<UserResponse> => {
    const response = await client.post<UserResponse>('/auth/signup', data);
    return response.data;
  },

  login: async (data: LoginRequest): Promise<LoginResponse> => {
    const response = await client.post<LoginResponse>('/auth/login', data);
    return response.data;
  }
};