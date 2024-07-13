import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UserData {
  username: string;
  setUserName: (newName: string) => void;
}
interface BookProperties{
  bookName: { type: String, required: true },
  author: { type: String, required: true },
  ISBN: { type: Number, required: true },
  bankAccount: { type: String },
  bookPrice: { type: Number },
  quantity: { type: Number },
}
interface BookStuff{
  boughtBook: BookProperties[],
  soldBook: BookProperties[],
  likedBooks: BookProperties[]
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
export const useBoughtBook = create<BookStuff>()(
  persist(
  (set) => ({
    boughtBook: [],
    soldBook: [],
    likedBooks: []
  }),
  {
    name: 'bookNestUserBookData'
  }
)
)