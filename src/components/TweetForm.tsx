"use client";

import { Input } from "./ui/input";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { TweetCard } from "./TweetCard";
const TweetForm = () => {
  const [tweet, setTweet] = useState("");
  const url = "https://twitter154.p.rapidapi.com/tweet/details?tweet_id=";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY || "",
      "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RAPIDAPI_HOST || "",
    },
  };
  async function run() {
    try {
      const response = await fetch(`${url}${tweet}`, options);
      const result = await response.text();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <div>
        <TweetCard />
      </div>
      <div className="z-0 fixed left-1/2 -translate-x-1/2 bottom-6 border rounded-md mt-6 py-6 px-4 md:min-w-72 gap-2 flex items-center justify-center">
        <Input
          type="url"
          required
          name="tweet"
          id="tweet"
          placeholder="Link to Tweet"
          value={tweet}
          onChange={(e) => setTweet(e.target.value)}
        />

        <Button onClick={run}>
          Search <Search size={16} className="ml-1" />
        </Button>
      </div>
    </div>
  );
};

export default TweetForm;
