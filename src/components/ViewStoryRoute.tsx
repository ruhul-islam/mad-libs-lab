import { useContext } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import StoriesContext from "../context/StoriesContext";
import Story from "../models/Story";
import "./ViewStoryRoute.css";

const ViewStoryRoute = () => {
  const id: number | undefined = parseInt(useParams().id!);
  let prevID: number = id;
  let nextID: number = id;

  const { stories } = useContext(StoriesContext);

  const story: Story | undefined = stories.find((item) => item.id === id);

  return (
    <div className="ViewStoryRoute">
      {story ? (
        <>
          <h2>Mad lib by: {story.author}</h2>
          <p>
            On my way to {story.word1}, I met {story.word2}.
          </p>
          <p>
            They were in quite a hurry because they were meeting {story.word3},
            the {story.word4}, in {story.word5} minutes!
          </p>
          <p>So we said, "{story.word6}" and parted ways.</p>
          <div>
            <Link to={`/stories/${--prevID}`}>
              <button disabled={story.id === 1}>Previous Story</button>
            </Link>
            <Link to={`/stories/${++nextID}`}>
              <button disabled={story.id === stories[stories.length - 1].id}>
                Next Story
              </button>
            </Link>
          </div>
        </>
      ) : (
        <>
          <p>No story here</p>
          <NavLink to="/create-story">Make a story?</NavLink>
        </>
      )}
    </div>
  );
};

export default ViewStoryRoute;
