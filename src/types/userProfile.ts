// userProfile.ts

export interface UserProfile {
  id: number;
  name: string;
  email: string;
  address: string;
}

export const userProfile: UserProfile = {
  id: 1,
  name: 'John Doe',
  email: 'john.doe@example.com',
  address: '123 Main St',
};
