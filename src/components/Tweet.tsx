import { Input } from "./ui/input";
import { Label } from "./ui/label";

const Tweet = () => {
  return (
    <div>
      <Label htmlFor="tweet">
        Link to Tweet
        <Input type="text" name="tweet" id="tweet" />
      </Label>
    </div>
  );
};

export default Tweet;
