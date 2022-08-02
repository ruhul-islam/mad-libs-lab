import { useContext } from "react";
import { useParams } from "react-router-dom";
import StoriesContext from "../context/StoriesContext";
import Story from "../models/Story";
import "./ViewStoryRoute.css";

const ViewStoryRoute = () => {
  const id: number | undefined = parseInt(useParams().id!);

  const { stories } = useContext(StoriesContext);

  const story: Story | undefined = stories.find((item) => item.id === id);

  return (
    <div className="ViewStoryRoute">
      <p>
        On my way to {story?.word1}, I met {story?.word2}.
      </p>
      <p>
        They were in quite a hurry because they were meeting {story?.word3}, the{" "}
        {story?.word4}, in {story?.word5} minutes!
      </p>
      <p>So we said, "{story?.word6}" and parted ways.</p>
    </div>
  );
};

export default ViewStoryRoute;
