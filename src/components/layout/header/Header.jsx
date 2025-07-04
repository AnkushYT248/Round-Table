import Link from "next/link";
import React from "react";
import data from "./nav_data";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeChanger from "@/components/layout/theme/ThemeChanger";
import SheetLayout from "@/components/layout/header/Sheet";
import CarouselLinks from "@/components/layout/header/Carousel_Links";

const Header = () => {
  return (
    <div className="relative">
      <div className="fixed z-60 top-0 left-0 w-screen h-15 bg-white dark:bg-[#0f0f10] text-black dark:text-white">
        <div className="flex items-center justify-between px-4">
          <div className="lg:flex items-center gap-4 flex-1 hidden">
            {data.map((data, idx) => {
              return (
                <NavigationMenu key={idx}>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger className="font-bold flex items-center gap-3">
                        {data.icon} {data.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                          {data.items.map((d, idx) => (
                            <ListItem key={idx} title={d.item} href={d.path}>
                              {/* {component.description} */}
                            </ListItem>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              );
            })}
          </div>
          <SheetLayout />
          <div className="flex-1 flex items-center justify-center lg:hidden">
            <Link
              href={"/"}
              className="text-xl audiowide rounded-md p-1 text-black dark:text-white flex items-center justify-center"
            >
              <span className="mr-1">R</span>
              <span>T</span>
            </Link>
          </div>
          <div className="flex items-center gap-4 flex-1 justify-end p-2">
            <ThemeChanger />
            <Bell />
            <Button>Sign In</Button>
          </div>
        </div>
        <CarouselLinks />
      </div>
    </div>
  );
};

export default Header;

function ListItem({ title, children, href, icon, ...props }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium flex items-center gap-4">
            {icon && icon}
            {title}
          </div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
