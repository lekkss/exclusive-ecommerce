import { Icon } from "@iconify/react";

type IconBadgeProps = {
  icon: string;
  count?: number;
  badgeColor?: string;
  badgeTextColor?: string;
  className?: string;
};

const IconBadge = ({
  icon,
  count = 0,
  badgeColor = "bg-red-600",
  badgeTextColor = "text-white",
  className = "",
}: IconBadgeProps) => {
  return (
    <div className="relative inline-block">
      {/* Icon */}
      <Icon icon={icon} className={`w-6 h-6 cursor-pointer ${className}`} />

      {/* Badge - Only show if count > 0 */}
      {count > 0 && (
        <span
          className={`absolute -top-2 -right-2 ${badgeColor} ${badgeTextColor} text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center`}
        >
          {count}
        </span>
      )}
    </div>
  );
};

export default IconBadge;
