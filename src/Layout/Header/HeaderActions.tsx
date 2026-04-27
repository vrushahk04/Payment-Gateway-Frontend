import { useState } from "react";
import { useAppSelector } from "../../Store";
import DashboardThemeToggle from "./DashboardThemeToggle";
import CommonIconButton from "../../Components/Common/CommonIconButton";
import CommonDropdown from "../../Components/Common/CommonDropdown";

const HeaderActions = () => {
  const { user } = useAppSelector((state) => state.auth);

  const [openNotif, setOpenNotif] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);

  return (
    <div className="flex items-center gap-3 sm:gap-4 lg:gap-5 relative">

      <div className="relative">
        <CommonIconButton
          badge
          onClick={() => setOpenNotif(!openNotif)}
          icon={
            <svg width="18" height="18" fill="none" stroke="currentColor">
              <path d="M10 18a2 2 0 0 0 2-2H8a2 2 0 0 0 2 2Z" />
              <path d="M18 14H2l2-2V8a6 6 0 1 1 12 0v4l2 2Z" strokeWidth="1.5"/>
            </svg>
          }
        />

        <CommonDropdown open={openNotif}>
          <div className="w-64 p-3">
            <p className="text-sm text-text-muted">
              No new notifications
            </p>
          </div>
        </CommonDropdown>
      </div>

      {/* 🌙 THEME */}
      <DashboardThemeToggle />

      {/* 👤 PROFILE */}
      <div className="relative">

        <button
          onClick={() => setOpenProfile(!openProfile)}
          className="
            flex items-center gap-2
            px-2 py-1 rounded-xl
            hover:bg-accent-50 dark:hover:bg-gray-900
            transition
          "
        >
          <div className="
            w-9 h-9 rounded-full
            bg-primaryy text-white
            flex items-center justify-center font-semibold
          ">
            {user?.name?.charAt(0)?.toUpperCase() || "U"}
          </div>

          <div className="hidden sm:block text-left">
            <p className="text-sm font-medium text-black dark:text-white">
              {user?.name || "User"}
            </p>
            <p className="text-xs text-text-muted">
              {user?.role || "Member"}
            </p>
          </div>
        </button>

        <CommonDropdown open={openProfile}>
          <div className="w-52 overflow-hidden">
            <button className="w-full text-left px-4 py-2 text-sm hover:bg-accent-50 dark:hover:bg-gray-900">
              Profile
            </button>
            <button className="w-full text-left px-4 py-2 text-sm hover:bg-accent-50 dark:hover:hover:bg-gray-900">
              Settings
            </button>
            <button className="w-full text-left px-4 py-2 text-sm text-error-500 hover:bg-accent-50 dark:hover:bg-gray-900">
              Logout
            </button>
          </div>
        </CommonDropdown>

      </div>

    </div>
  );
};

export default HeaderActions;