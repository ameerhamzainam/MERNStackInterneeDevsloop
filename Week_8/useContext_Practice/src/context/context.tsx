// filepath: c:\Users\Ameer Hamza Laptop\Downloads\MERNStackInterneeDevsloop\Week_8\useContext_Practice\src\context\context.tsx
import { createContext } from 'react';

interface MyContextType {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

export const MyContext = createContext<MyContextType>({
  count: 0,
  setCount: () => {}, // Default function (no-op)
});