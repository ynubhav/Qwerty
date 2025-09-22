import {
  ArrowUpRightFromSquare,
  CheckSquare,
  CircleCheckIcon,
  FileSignature,
  List,
  ListChevronsDownUp,
  LogIn,
  LogOut,
  Star,
  UserPenIcon,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Link, useLocation } from "react-router-dom";
import { ModeToggle } from "./mode-toggle";
import { Label } from "./ui/label";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import axios from "axios";

export function NavigationMenuBar() {
  const [LoggedIn, setLoggedIn] = useState(false);
  const [userid,setuserid]=useState('');
  const some=useLocation();
  useEffect(() => {
    try{
    const token = localStorage.getItem("token");
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/auth/me`,{headers:{
        authorization:token
      }})
      .then((res) => {
        if (res.data.success) {
          setuserid(res.data.userinfo.id);
          setLoggedIn(true);
        } else {
          setLoggedIn(false);
          toast.error('User Not Logged In')
        }
      })
      .catch((err) => {
        console.log(err.message);
        toast.error('User Not Logged In')
      })}
      catch(err){
        toast.error('User Not Logged In')
      }
  }, [some]);
  return (
    <NavigationMenu className="flex w-full" viewport={false}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Home</NavigationMenuTrigger>
          <NavigationMenuContent className="absolute left-0 top-full mt-2 w-max bg-background shadow-md rounded-md z-50">
            <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                    href="/home"
                  >
                    <div className="mt-4 mb-2 text-lg font-medium">
                      Medium Blog
                    </div>
                    <p className="text-muted-foreground text-sm leading-tight">
                      Beautifully designed for Bloggers Proffessional/Complete
                      Beginner.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/home/introduction" title="Introduction">
                How to write and publish a blog
              </ListItem>
              <ListItem href="home/docs" title="Our Story">
                How we got here. And all you want to know
              </ListItem>
              <ListItem href="/docs/primitives/typography" title="Typography">
                Styles for headings, paragraphs, lists...etc
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem className="hidden md:flex">
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link to={"/feed"}>Feed</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem className="hidden md:flex">
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link to={"/blog/workspace/create"}>
              {" "}
              <Label className="flex items-center">
                Create
                <ArrowUpRightFromSquare className="w-5 h-5" />
              </Label>
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem className="hidden md:flex">
          <NavigationMenuTrigger>Go To</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-max gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link
                    to={"/mylist/ReadList"}
                    className="flex-row items-center gap-2"
                  >
                    <List />
                    My Reading List
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link
                    to={"/mylist/Favourites"}
                    className="flex-row items-center gap-2"
                  >
                    <Star />
                    Favourites
                  </Link>
                </NavigationMenuLink>
                {/* <NavigationMenuLink asChild>
                  <Link
                    to={"/blog/workspace/logs"}
                    className="flex-row items-center gap-2"
                  >
                    <Logs />
                    Create Logs
                  </Link>
                </NavigationMenuLink> */}
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </NavigationMenuTrigger>
          <NavigationMenuContent className="absolute left-0 top-full mt-2 w-max bg-background shadow-md rounded-md z-50">
            <ul className="grid w-max gap-4">
              <li>
                {LoggedIn && (
                  <NavigationMenuLink asChild>
                    <Link
                      to={`/home/profile/${userid}`}
                      className="flex-row items-center gap-2"
                    >
                      <UserPenIcon />
                      My Profile
                    </Link>
                  </NavigationMenuLink>
                )}
                <NavigationMenuLink asChild>
                  <Link
                    to={"/auth/signup"}
                    className="flex-row items-center gap-2"
                  >
                    <FileSignature />
                    Sign Up
                  </Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link
                    to={"/auth/login"}
                    className="flex-row items-center gap-2"
                  >
                    <LogIn />
                    Login
                  </Link>
                </NavigationMenuLink>
                {LoggedIn && (
                  <button onClick={() => toast.error("hello")}>
                    <NavigationMenuLink asChild>
                      <Link
                        to={"/"}
                        className="flex-row items-center gap-2 text-red-400 hover:text-red-400 hover:bg-red-400/30"
                      >
                        <LogOut className="text-red-400" />
                        Logout
                      </Link>
                    </NavigationMenuLink>
                  </button>
                )}
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* mobile hamburger menu */}
        <NavigationMenuItem className="md:hidden">
          <NavigationMenuTrigger>
            <ListChevronsDownUp className="w-5 h-5" />
          </NavigationMenuTrigger>
          <NavigationMenuContent className="absolute left-0 top-full mt-2 w-max bg-background shadow-md rounded-md z-50">

            <NavigationMenuItem className="relative z-0">
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link to={"/feed"}>Feed</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem className="relative z-0">
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link to={"/blog/workspace/create"}>Create</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem className="hidden md:flex">
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link to={"/feed"}>
                  {" "}
                  <Label className="flex items-center">
                    My Reading List
                    <ArrowUpRightFromSquare className="w-5 h-5" />
                  </Label>
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem className="hidden md:flex">
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link to={"/feed"}>
                  {" "}
                  <Label className="flex items-center">
                     Favourites
                    <ArrowUpRightFromSquare className="w-5 h-5" />
                  </Label>
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>


            <NavigationMenuItem className="hidden md:flex">
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link to={"/feed"}>
                  {" "}
                  <Label className="flex items-center">
                    Create
                    <ArrowUpRightFromSquare className="w-5 h-5" />
                  </Label>
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem className="hidden md:flex">
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link to={"/feed"}>
                  {" "}
                  <Label className="flex items-center">
                    Create
                    <ArrowUpRightFromSquare className="w-5 h-5" />
                  </Label>
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Go To</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-max gap-4">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        to={"/blog/mylist/ReadList"}
                        className="flex-row items-center gap-2"
                      >
                        <List />
                        My Reading List
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        to={"/blog/mylist/Favourites"}
                        className="flex-row items-center gap-2"
                      >
                        <Star />
                        Favourites
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to={"/"} className="flex-row items-center gap-2">
                        <CircleCheckIcon />
                        Published Blogs
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link to={"/"} className="flex-row items-center gap-2">
                        <CheckSquare />
                        Saved Blogs
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <ModeToggle />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link to={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
