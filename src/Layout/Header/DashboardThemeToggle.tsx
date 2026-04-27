import { useAppDispatch, useAppSelector } from "../../Store";
import { setToggleTheme } from "../../Store/Slices/LayoutSlice";

const DashboardThemeToggle = () => {
  const dispatch = useAppDispatch();
  const { isToggleTheme } = useAppSelector((state) => state.layout);

  const handleToggle = () => {
    const newTheme = isToggleTheme === "light" ? "dark" : "light";

    dispatch(setToggleTheme(newTheme));

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
        flex items-center justify-center
        w-10 h-10 rounded-xl
        transition-all duration-300
        bg-gray-100 text-gray-800
        dark:bg-[#1f1f1f] dark:text-white
        hover:bg-gray-200 dark:hover:bg-[#2a2a2a]
        active:scale-95
        shadow-sm hover:shadow-md
        border border-gray-200 dark:border-gray-700
      "
    >
      {/* Sun */}
      {!isDark && (
        <svg
          width="18"
          height="18"
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

      {/* Moon */}
      {isDark && (
        <svg
          width="18"
          height="18"
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

export default DashboardThemeToggle;