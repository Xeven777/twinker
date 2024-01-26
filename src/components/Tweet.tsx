"use client";

import { Input } from "./ui/input";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
const Tweet = () => {
  const [url, seturl] = useState("");
  return (
    <div className="z-0 fixed bottom-6 border rounded-md mt-6 py-6 px-4 md:min-w-72 gap-2 flex items-center justify-center">
      <Input
        type="url"
        name="tweet"
        id="tweet"
        placeholder="Link to Tweet"
        value={url}
        onChange={(e) => seturl(e.target.value)}
      />

      <Button>
        Search <Search size={16} className="ml-1" />
      </Button>
    </div>
  );
};

export default Tweet;
