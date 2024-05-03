"use client";

import { Input } from "./ui/input";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { TweetCard } from "./TweetCard";
const TweetForm = () => {
  const [tweet, setTweet] = useState("");
  const [result, setResult] = useState({});
  const url = "https://twitter154.p.rapidapi.com/tweet/details?tweet_id=";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY || "",
      "X-RapidAPI-Host": "twitter154.p.rapidapi.com",
    },
  };
  async function run() {
    try {
      const response = await fetch(`${url}${tweet.split("/").pop()?.split("?")[0]}`, options);
      const res = await response.json();
      setResult(res);
      // console.log(result);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <div>
        <TweetCard data={result} />
      </div>
      <div className="z-10 backdrop-blur-md fixed left-1/2 -translate-x-1/2 bottom-6 border rounded-md mt-6 py-6 px-4 md:min-w-xl gap-2 flex flex-wrap md:flex-nowrap items-center justify-center">
        <Input
          type="url"
          required
          name="tweet"
          id="tweet"
          placeholder="Link to Tweet"
          value={tweet}
          className="min-w-36"
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