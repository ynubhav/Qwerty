import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Bookmark, HeartIcon, Send } from "lucide-react";
import { useState } from "react";

export function BlogFullView({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [Marked, setMarked] = useState(false);
  const [Liked, setLiked] = useState(false);
  return (
    <>
      <div
        className={cn(
          "flex flex-col gap-6 max-w-3xl mx-1 md:mx-4 lg:mx-6 mt-2 mb-10",
          className
        )}
        {...props}
      >
        <Card onDoubleClick={() => setLiked(true)} className="shadow-sm">
          <CardHeader>
            <CardTitle className="flex justify-between">
              <h1>WTH IS A BLOG ?!</h1>
              <Tooltip>
                <TooltipTrigger>
                  <Bookmark
                    className={`w-5 h-5 transition-colors ${
                      Marked ? "dark:fill-white fill-black " : "fill-none"
                    }`}
                    onClick={() => {
                      setMarked((prev) => !prev);
                    }}
                  />
                </TooltipTrigger>
                <TooltipContent>
                  {Marked ? <p>Remove from Library</p> : <p>Add to Library</p>}
                </TooltipContent>
              </Tooltip>
            </CardTitle>
            <CardDescription className="flex gap-1">
              By{" "}
              <p className="text-green-400 hover:underline hover:underline-offset-4 cursor-pointer">
                ynubhav
              </p>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-6">
              {`shadcn/ui is a set of beautifully-designed, accessible components and a code distribution platform. Works with your favorite frameworks and AI models. Open Source. Open Code.

This is not a component library. It is how you build your component library.

You know how most traditional component libraries work: you install a package from NPM, import the components, and use them in your app.

This approach works well until you need to customize a component to fit your design system or require one that isn’t included in the library. Often, you end up wrapping library components, writing workarounds to override styles, or mixing components from different libraries with incompatible APIs.

This is what shadcn/ui aims to solve. It is built around the following principles:


Open Code: The top layer of your component code is open for modification.
Composition: Every component uses a common, composable interface, making them predictable.
Distribution: A flat-file schema and command-line tool make it easy to distribute components.
Beautiful Defaults: Carefully chosen default styles, so you get great design out-of-the-box.
AI-Ready: Open code for LLMs to read, understand, and improve.
Open Code
shadcn/ui hands you the actual component code. You have full control to customize and extend the components to your needs. This means:

Full Transparency: You see exactly how each component is built.
Easy Customization: Modify any part of a component to fit your design and functionality requirements.
AI Integration: Access to the code makes it straightforward for LLMs to read, understand, and even improve your components.
In a typical library, if you need to change a button’s behavior, you have to override styles or wrap the component. With shadcn/ui, you simply edit the button code directly.


How do I pull upstream updates in an Open Code approach?

Composition
Every component in shadcn/ui shares a common, composable interface. If a component does not exist, we bring it in, make it composable, and adjust its style to match and work with the rest of the design system.

A shared, composable interface means it's predictable for both your team and LLMs. You are not learning different APIs for every new component. Even for third-party ones.

Distribution
shadcn/ui is also a code distribution system. It defines a schema for components and a CLI to distribute them.

Schema: A flat-file structure that defines the components, their dependencies, and properties.
CLI: A command-line tool to distribute and install components across projects with cross-framework support.
You can use the schema to distribute your components to other projects or have AI generate completely new components based on existing schema.

Beautiful Defaults
shadcn/ui comes with a large collection of components that have carefully chosen default styles. They are designed to look good on their own and to work well together as a consistent system:

Good Out-of-the-Box: Your UI has a clean and minimal look without extra work.
Unified Design: Components naturally fit with one another. Each component is built to match the others, keeping your UI consistent.
Easily Customizable: If you want to change something, it's simple to override and extend the defaults.
AI-Ready
The design of shadcn/ui makes it easy for AI tools to work with your code. Its open code and consistent API allow AI models to read, understand, and even generate new components.

An AI model can learn how your components work and suggest improvements or even create new components that integrate with your existing design.`}
            </div>
            <div className="flex gap-2 mt-2">
              <Tooltip>
                <TooltipTrigger>
                  <HeartIcon
                    onClick={() => setLiked((prev) => !prev)}
                    className={`${
                      Liked ? "dark:fill-white fill-black" : "fill-none"
                    } w-5 h-5`}
                  />
                </TooltipTrigger>
                <TooltipContent>
                  {Liked ? <p>Liked</p> : <p>Like</p>}
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger>
                  <Send className={`w-5 h-5`} />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Send</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
