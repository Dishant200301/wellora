import * as React from "react";
import { motion, HTMLMotionProps, Transition } from "framer-motion";
import { cn } from "@/lib/utils";

export type HamburgerVariant = "standard" | "elastic" | "minimal";

export interface HamburgerButtonProps extends Omit<
  HTMLMotionProps<"button">,
  "children" | "onClick"
> {
  /**
   * The active open/close state of the menu.
   */
  isOpen: boolean;
  /**
   * Callback fired when the button is clicked.
   */
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  /**
   * Visual variant style.
   * - 'standard': A classic 3-line hamburger that rotates the outer lines and fades the center line.
   * - 'elastic': Snappy, high-overshoot spring lines that rebound playfully on toggle.
   * - 'minimal': A minimalist 2-line structure that crosses directly.
   */
  variant?: HamburgerVariant;
  /**
   * The size of the SVG canvas. Defaults to 24.
   */
  size?: number;
  /**
   * The stroke width of the lines. Defaults to 2.
   */
  strokeWidth?: number;
  /**
   * Custom color of the lines. Defaults to 'currentColor' to inherit text color.
   */
  color?: string;
  /**
   * Background hover effect. Defaults to true.
   * Adds a subtle rounded background that glows/animates on hover/tap.
   */
  hoverBg?: boolean;
}

export const HamburgerButton = React.forwardRef<HTMLButtonElement, HamburgerButtonProps>(
  (
    {
      isOpen,
      onClick,
      variant = "standard",
      size = 24,
      strokeWidth = 2,
      color = "currentColor",
      hoverBg = true,
      className,
      ...props
    },
    ref,
  ) => {
    // Dynamic Spring transition based on selected variant style
    const springTransition: Transition = {
      type: "spring",
      stiffness: variant === "elastic" ? 380 : 260,
      damping: variant === "elastic" ? 14 : 22,
      mass: variant === "elastic" ? 0.7 : 1,
    };

    // Standard 3-line variant config
    const standardLines = {
      top: {
        closed: { rotate: 0, y: 0 },
        opened: { rotate: 45, y: 6 },
        hover: isOpen ? { rotate: 45, y: 6, scale: 1.05 } : { y: -1.5 },
      },
      middle: {
        closed: { opacity: 1, scaleX: 1 },
        opened: { opacity: 0, scaleX: 0 },
        hover: isOpen ? { opacity: 0, scaleX: 0 } : { scaleX: 1.15 },
      },
      bottom: {
        closed: { rotate: 0, y: 0 },
        opened: { rotate: -45, y: -6 },
        hover: isOpen ? { rotate: -45, y: -6, scale: 1.05 } : { y: 1.5 },
      },
    };

    // Minimal 2-line variant config (lines are placed at y=8 and y=16)
    const minimalLines = {
      top: {
        closed: { rotate: 0, y: 0 },
        opened: { rotate: 45, y: 4 },
        hover: isOpen ? { rotate: 45, y: 4, scale: 1.05 } : { y: -1 },
      },
      bottom: {
        closed: { rotate: 0, y: 0 },
        opened: { rotate: -45, y: -4 },
        hover: isOpen ? { rotate: -45, y: -4, scale: 1.05 } : { y: 1 },
      },
    };
    return (
      <motion.button
        ref={ref}
        type="button"
        onClick={onClick}
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        className={cn(
          "relative flex items-center justify-center p-2 rounded-full cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#1c8e6a] transition-shadow select-none",
          hoverBg &&
            "hover:bg-[#111514]/5 dark:hover:bg-white/10 active:scale-95 transition-[background-color,transform] duration-200",
          className,
        )}
        whileHover="hover"
        whileTap="tap"
        {...props}
      >
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="overflow-visible pointer-events-none"
        >
          {variant === "minimal" ? (
            <>
              {/* Minimal Line 1 */}
              <motion.line
                x1="4"
                y1="8"
                x2="20"
                y2="8"
                variants={minimalLines.top}
                animate={isOpen ? "opened" : "closed"}
                transition={springTransition}
              />
              {/* Minimal Line 2 */}
              <motion.line
                x1="4"
                y1="16"
                x2="20"
                y2="16"
                variants={minimalLines.bottom}
                animate={isOpen ? "opened" : "closed"}
                transition={springTransition}
              />
            </>
          ) : (
            <>
              {/* Standard / Elastic Line 1 (Top) */}
              <motion.line
                x1="4"
                y1="6"
                x2="20"
                y2="6"
                variants={standardLines.top}
                animate={isOpen ? "opened" : "closed"}
                transition={springTransition}
              />
              {/* Standard / Elastic Line 2 (Middle) */}
              <motion.line
                x1="4"
                y1="12"
                x2="20"
                y2="12"
                variants={standardLines.middle}
                animate={isOpen ? "opened" : "closed"}
                transition={isOpen ? { duration: 0.15 } : springTransition}
              />
              {/* Standard / Elastic Line 3 (Bottom) */}
              <motion.line
                x1="4"
                y1="18"
                x2="20"
                y2="18"
                variants={standardLines.bottom}
                animate={isOpen ? "opened" : "closed"}
                transition={springTransition}
              />
            </>
          )}
        </svg>
      </motion.button>
    );
  },
);

HamburgerButton.displayName = "HamburgerButton";
