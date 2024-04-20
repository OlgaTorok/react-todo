import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

function DarkMode() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') setDarkMode(true);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <button
      className='relative w-16 h-8 flex items-center dark:bg-slate bg-slateLight cursor-pointer rounded-full p-1'
      onClick={() => setDarkMode(!darkMode)}
    >
      <Moon className='text-slateDark' />
      <div
        className='absolute bg-slate text-slateDark dark:bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300'
        style={darkMode ? { left: '2px' } : { right: '2px' }}
      ></div>
      <Sun className='ml-auto text-white' />
    </button>
  );
}

export default DarkMode;
