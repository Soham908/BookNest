import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UserData {
  username: string;
  setUserName: (newName: string) => void;
}

export const useUserDataStore = create<UserData>()(
  persist(
    (set) => ({
      username: "",
      setUserName: (nameBe) => set({ username: nameBe }),
    }),
    {
      name: "bookNestDataStore",
    }
  )
);
