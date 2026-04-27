import { useAppDispatch, useAppSelector } from "../Store";
import { setToggleTheme } from "../Store";

const ThemeToggler = () => {
  const dispatch = useAppDispatch();
  const { isToggleTheme } = useAppSelector((state) => state.layout);

  const handleToggle = () => {
    const newTheme = isToggleTheme === "light" ? "dark" : "light";

    dispatch(setToggleTheme(newTheme));

    // sync Tailwind dark mode
    document.documentElement.classList.toggle(
      "dark",
      newTheme === "dark"
    );
  };

  const isDark = isToggleTheme === "dark";

  return (
    <button
      onClick={handleToggle}
      aria-label="Toggle Theme"
      className="
        relative flex items-center justify-center
        w-12 h-12 rounded-full
        transition-all duration-300
        bg-white text-black
        dark:bg-[#111] dark:text-white
        shadow-md hover:shadow-lg
        active:scale-95
        border border-gray-200 dark:border-gray-700
      "
    >
      {/* Sun Icon */}
      {!isDark && (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          className="transition-all duration-300"
        >
          <path
            d="M10 1v2M10 17v2M4.22 4.22l1.42 1.42M14.36 14.36l1.42 1.42M1 10h2M17 10h2M4.22 15.78l1.42-1.42M14.36 5.64l1.42-1.42"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle cx="10" cy="10" r="3.5" stroke="currentColor" />
        </svg>
      )}

      {/* Moon Icon */}
      {isDark && (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="transition-all duration-300"
        >
          <path d="M14.5 13.5A6.5 6.5 0 0 1 6.5 5.5a5.5 5.5 0 1 0 8 8z" />
        </svg>
      )}
    </button>
  );
};

export default ThemeToggler;