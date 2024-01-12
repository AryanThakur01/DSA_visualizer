"use client";
import { useTheme } from "next-themes";
import { FC, ReactNode } from "react";
import { Button } from "./ui/button";
import { Home, MoonIcon, SunIcon, User, LogOut, GitFork } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/redux/hooks";
import { cn } from "@/lib/utils";

interface IThemeSelector {}

const ThemeSelector: FC<IThemeSelector> = () => {
  const { theme, setTheme } = useTheme();
  return (
    <Button
      variant="ghost"
      className="px-2 md:px-4"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
};

interface ISessionDropDown {
  children: ReactNode;
}
export const SessionDropDown: FC<ISessionDropDown> = ({ children }) => {
  const stars = useAppSelector((state) => state.StarSlice.starCount);
  const router = useRouter();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="px-2 md:px-4">
          {children}
          <span
            className={cn(
              stars <= 0
                ? "hidden"
                : "bg-destructive rounded-full h-4 w-4 text-center text-xs absolute mb-5 ml-4",
            )}
          >
            {stars}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuItem
          onClick={() => {
            router.push("/");
          }}
        >
          <Home className="mr-2 h-4 w-4" />
          <span>Home</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            router.push("/allanimations");
          }}
        >
          <GitFork className="mr-2 h-4 w-4 rotate-90" />
          <span>Animations</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => {
            router.push("/profile");
          }}
        >
          <User className="mr-2 h-4 w-4" />
          <span>Profile</span>
          <span
            className={cn(
              stars <= 0
                ? "hidden"
                : "bg-destructive rounded-full h-4 w-4 text-center text-xs relative bottom-1 right-1",
            )}
          >
            {stars}
          </span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={() =>
            signOut({
              callbackUrl: window.location.href,
            })
          }
        >
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeSelector;
