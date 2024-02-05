"use client";

import { Input } from "./ui/input";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { TweetCard } from "./TweetCard";
// import { getId } from "@/actions";
const TweetForm = () => {
  const [tweet, setTweet] = useState("");
  const [tweetId, setTweetId] = useState("");
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
    setTweetId(getId(tweet));
    console.log(tweetId);
    try {
      const response = await fetch(`${url}${tweetId}`, options);
      const res = await response.json();
      setResult(res);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <div>
        <TweetCard data={result} />
      </div>
      <div className="z-0 backdrop-blur-md fixed left-1/2 -translate-x-1/2 bottom-6 border rounded-md mt-6 py-6 px-4 md:min-w-72 gap-2 flex items-center justify-center">
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

function getId(tweetUrl: string): string {
  const url = new URL(tweetUrl);
  const pathComponents = url.pathname.split('/');
  const tweetId = pathComponents[pathComponents.length - 1];
  return tweetId;
}