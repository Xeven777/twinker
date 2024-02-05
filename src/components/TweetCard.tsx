"use client";
import userpic from "../assets/Upstream-4.png";
import { toPng } from "html-to-image";
import { Button } from "@/components/ui/button";
import {
  BarChart2Icon,
  Download,
  HeartIcon,
  MessageCircleIcon,
  RepeatIcon,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState, useRef, useCallback } from "react";

interface TweetCardProps {
  data: any;
}

export function TweetCard(data: TweetCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [fDate, setfDate] = useState("Just Now");
  const texts =
    "Lorem ipsum dolor sit amet...... Lorem ipsum is a string of nonsensical Latin-derived words commonly used as placeholder text in graphic design, web design, and publishing. It allows designers and publishers to see how layout and fonts will look without the distraction of actual content.";
  useEffect(() => {
    console.log(data);
    const date = new Date(data.data?.creation_date);
    setfDate(
      date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })
    );
  }, [data]);

  const clickImage = useCallback(() => {
    if (ref.current === null) {
      return;
    }
    toPng(ref.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "Twinker.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [ref]);

  return (
    <div className="relative">
      <div
        ref={ref}
        className="relative border overflow-hidden text-wrap border-gray-700 bg-gradient-to-tr from-slate-900 via-slate-950 to-gray-950 shadow-inner shadow-gray-700 rounded-lg mx-auto p-4 mb-44 md:mb-32 before:absolute before:w-32 before:h-20 before:right-2 before:bg-cyan-700/90 before:-z-10 before:rounded-full before:blur-2xl hover:before:-top-5 hover:after:-top-16 before:-top-12 z-10 after:absolute after:w-24 after:h-24 after:bg-blue-800/40 after:-z-10 before:duration-500 after:duration-500 before:transition-all after:transition-all after:rounded-full after:blur after:-top-12 after:-right-6 min-w-80 max-w-[500px]"
      >
        <div className="flex space-x-4 items-center">
          {data.data?.user?.profile_pic_url ? (
            <Image
              alt="@xeven"
              src={data.data?.user?.profile_pic_url}
              className="w-10 h-10 rounded-full"
              width={48}
              height={48}
            />
          ) : (
            <Image
              alt="@xeven"
              src={userpic}
              className="w-10 h-10 rounded-full"
            />
          )}
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">
              @{data.data?.user?.username || "twinker"}
            </h4>
            <div className="flex items-center pt-1">
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {data.data?.date ? fDate : "Just Now"}
              </span>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-sm">{data.data?.text || texts}</p>

          {data.data?.media_url && (
            <div className="mt-4 max-h-[550px] overflow-hidden rounded-lg w-full">
              <Image
                className="w-full h-auto"
                src={data.data?.media_url[0]}
                alt=""
                width={430}
                height={200}
              />
            </div>
          )}
          <div className="mt-6">
            <Button className="mr-2 group" variant="ghost" size="sm">
              <HeartIcon className="mr-2 h-4 w-4 text-rose-600 group-hover:scale-125 transition-all group-hover:animate-pulse" />
              {data.data?.favorite_count >= 0 ? data.data?.favorite_count : 490}
            </Button>
            <Button className="mr-2 group" variant="ghost" size="sm">
              <RepeatIcon className="mr-2 h-4 w-4 text-green-600 group-hover:scale-125 transition-all group-hover:animate-spin" />
              {data.data?.retweet_count >= 0 ? data.data?.retweet_count : 43}
            </Button>
            <Button className="mr-2 group" variant="ghost" size="sm">
              <MessageCircleIcon className="mr-2 h-4 w-4 text-cyan-600 group-hover:scale-125 transition-all group-hover:animate-pulse" />
              {data.data?.quote_count >= 0 ? data.data?.quote_count : 21}
            </Button>
            <Button className="mr-2 group" variant="ghost" size="sm">
              <BarChart2Icon className="mr-2 h-4 w-4 text-zinc-400" />
              {data.data?.views >= 0 ? data.data?.views : 6272}
            </Button>
          </div>
        </div>
      </div>
      <Button
        className="absolute bottom-2 right-2 z-10"
        variant="outline"
        size="icon"
        onClick={clickImage}
      >
        <Download className="text-blue-500" />
      </Button>
    </div>
  );
}

{
  /* // binding_values: null
// ​​
// bookmark_count: 0
// ​​
// community_note: null
// ​​
// conversation_id: "1754398287162134752"
// ​​
// creation_date: "Mon Feb 05 06:55:21 +0000 2024"
// ​​
// expanded_url: "https://twitter.com/xevenbiswas/status/1754398287162134752/photo/1"
// ​​
// extended_entities: Object { media: (1) […] }
// ​​
// favorite_count: 4
// ​​
// in_reply_to_status_id: null
// ​​
// language: "en"
// ​​
// media_url: Array [ "https://pbs.twimg.com/media/GFjfO1PWwAAMKrW.jpg" ]
// ​​
// quote_count: 0
// ​​
// quoted_status: null
// ​​
// quoted_status_id: null
// ​​
// reply_count: 0
// ​​
// retweet: false
// ​​
// retweet_count: 0
// ​​
// retweet_status: null
// ​​
// retweet_tweet_id: null
// ​​
// source: "Twitter Web App"
// ​​
// text: "i have exams tomorrow on python. Why tf am i making projects in next.js ?! 😭😭\n\n#nextjs #vscode #100DaysOfCode #buildinpublic #tech https://t.co/gqxc8ratbm"
// ​​
// timestamp: 1707116121
// ​​
// tweet_id: "1754398287162134752"
// ​​
// user: Object { creation_date: "Thu Apr 06 04:58:20 +0000 2023", user_id: "1643840488502620160", username: "xevenbiswas", … }
// ​​
// video_url: null
// ​​
// video_view_count: null
// ​​
// views: 48 */
}
