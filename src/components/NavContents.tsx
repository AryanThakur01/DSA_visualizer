"use client";
import { useTheme } from "next-themes";
import { FC, ReactNode } from "react";
import { Button } from "./ui/button";
import { Home, MoonIcon, SunIcon, User, LogOut } from "lucide-react";
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

interface IThemeSelector {}

const ThemeSelector: FC<IThemeSelector> = () => {
  const { theme, setTheme } = useTheme();
  return (
    <Button
      variant="ghost"
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
  const router = useRouter();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">{children}</Button>
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
            router.push("/profile");
          }}
        >
          <User className="mr-2 h-4 w-4" />
          <span>Profile</span>
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
