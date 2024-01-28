import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  CalendarDaysIcon,
  HeartIcon,
  MessageCircleIcon,
  RepeatIcon,
  Share2Icon,
} from "lucide-react";

export function TweetCard() {
  return (
    <div className="border border-gray-300 rounded-lg max-w-md mx-auto my-4 p-4">
      <div className="flex space-x-4">
        <Avatar>
          <AvatarImage alt="@nextjs" src="/placeholder-avatar.jpg" />
          <AvatarFallback>JP</AvatarFallback>
        </Avatar>
        <div className="space-y-1">
          <h4 className="text-sm font-semibold">@nextjs</h4>
          <p className="text-sm">
            The React Framework – created and maintained by @vercel.
          </p>
          <div className="flex items-center pt-2">
            <CalendarDaysIcon className="mr-2 h-4 w-4 opacity-70" />
            <span className="text-xs text-gray-500 dark:text-gray-400">
              Joined December 2021
            </span>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod,
          nisl id tristique tincidunt, nisl nunc euismod nisi, in tincidunt nisl
          nunc euismod nisi.
        </p>
        <div className="mt-2">
          <span className="text-xs text-gray-500 dark:text-gray-400">
            <CalendarDaysIcon className="mr-2 h-4 w-4 opacity-70" />
            January 1, 2022
          </span>
        </div>
        <div className="mt-4">
          <Button className="mr-2" variant="outline">
            <HeartIcon className="mr-2 h-4 w-4" />
            100
          </Button>
          <Button className="mr-2" variant="outline">
            <RepeatIcon className="mr-2 h-4 w-4" />
            10
          </Button>
          <Button className="mr-2" variant="outline">
            <MessageCircleIcon className="mr-2 h-4 w-4" />
            20
          </Button>
          <Button className="mr-2" variant="outline">
            <Share2Icon className="mr-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
