import { create } from 'zustand';

interface User {
  name: string;
  password: string;
}

const useUserStore = create<User>((set) => ({
  name: '',
  password: '',
  setName: (name: string) => set({ name }),
  setPassword: (password: string) => set({ password }),
  resetUser: () => set({ name: '', password: '' }),
}));

export default useUserStore;
