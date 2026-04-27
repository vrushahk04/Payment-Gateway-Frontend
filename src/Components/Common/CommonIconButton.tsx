type Props = {
  icon: React.ReactNode;
  onClick?: () => void;
  badge?: boolean;
};

const CommonIconButton = ({ icon, onClick, badge }: Props) => {
  return (
    <button
      onClick={onClick}
      className="
        relative w-10 h-10 flex items-center justify-center
        rounded-xl
        bg-surface dark:bg-surface-light
        border border-border
        text-gray-600 dark:text-white
        hover:bg-accent-50 dark:hover:bg-gray-900
        transition
      "
    >
      {icon}

      {badge && (
        <span className="absolute top-1 right-1 w-2 h-2 bg-success rounded-full" />
      )}
    </button>
  );
};

export default CommonIconButton;