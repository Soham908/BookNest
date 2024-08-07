'use client'
import React from "react";
import bookData from "../../data/booksData.json";
import SearchBar from "@/components/SearchBar";
import { useRouter } from "next/navigation";

export default function BookPage() {

  const router = useRouter()

  const handleBookCardClick = () => {
    router.push('/book-detail')
  }

  return (
    <div className="min-h-screen transition-colors duration-300">
      <header className="p-4 flex items-center">
        <SearchBar />
      </header>
      <main className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 p-4">
        {bookData.map((book) => (
          <div
            key={book.id}
            className="w-40 h-80 rounded overflow-hidden border-2 border-gray-700 shadow-2xl hover:shadow-xl hover:border-blue-700 transition-shadow duration-300"
            onClick={ handleBookCardClick }
          >
            <img
              className="w-full h-3/4 object-cover"
              src={book.volumeInfo.imageLinks.thumbnail}
              alt={`Cover of ${book.volumeInfo.title}`}
            />
            <div className="p-2 h-1/4">
              <div className="text-sm font-bold">{book.volumeInfo.title}</div>
              <p className="text-xs text-gray-700 truncate">
                by {book.volumeInfo.authors}
              </p>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}
