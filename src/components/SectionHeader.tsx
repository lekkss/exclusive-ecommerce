import React from "react";
import { Icon } from "@iconify/react";
import Text from "./Text";
import Button from "./Button";

type SectionHeaderProps = {
  primaryText: string; // e.g. "Today's"
  title: string; // e.g. "Flash Sales"
  showArrows?: boolean; // Option to show arrow buttons for navigation
  onNextClick?: () => void; // Handler for the next arrow click
  onPrevClick?: () => void; // Handler for the previous arrow click
  showViewAllButton?: boolean; // Option to show a "View All" button
  onViewAllClick?: () => void; // Handler for "View All" button click
  subComponent?: React.ReactNode; // Component to display next to the title (e.g. Countdown)
  children?: React.ReactNode; // Optional content to be rendered below the header
};

const SectionHeader: React.FC<SectionHeaderProps> = ({
  primaryText,
  title,
  showArrows = false,
  onNextClick,
  onPrevClick,
  showViewAllButton = false,
  onViewAllClick,
  subComponent, // Subcomponent like countdown or badge
  children,
}) => {
  return (
    <div className="flex flex-col gap-4">
      {/* Primary section header */}
      <div className="flex gap-2 items-center">
        <div className="h-8 w-4 bg-pry rounded"></div> {/* Left bar */}
        <Text color="primary" weight="semibold">
          {primaryText}
        </Text>
      </div>

      {/* Title with optional subcomponent and controls */}
      <div className="flex  items-center justify-between">
        <div className="flex flex-col md:flex-row md:items-center gap-5">
          <Text color="black" weight="semibold" className="text-3xl">
            {title}
          </Text>

          {/* Optional subcomponent like Countdown */}
          {subComponent && (
            <div className="md:block hidden">{subComponent}</div>
          )}
        </div>

        {/* Right-side controls: Arrows or "View All" button */}
        <div className="flex items-center gap-3">
          {showArrows && (
            <div className="flex gap-2">
              <button onClick={onPrevClick}>
                <div className="w-10 h-10 rounded-full bg-[#F5F5F5] flex items-center justify-center">
                  <Icon
                    icon="line-md:arrow-left"
                    className="w-6 h-6 text-black"
                  />
                </div>
              </button>

              <button onClick={onNextClick}>
                <div className="w-10 h-10 rounded-full bg-[#F5F5F5] flex items-center justify-center">
                  <Icon
                    icon="line-md:arrow-right"
                    className="w-6 h-6 text-black"
                  />
                </div>
              </button>
            </div>
          )}

          {showViewAllButton && (
            <Button
              text="View All"
              onClick={onViewAllClick}
              textColor="text-white"
              padding="lg"
            />
          )}
        </div>
      </div>

      {/* Render additional content passed as children */}
      <div>{children}</div>
    </div>
  );
};

export default SectionHeader;
