import { ReactNode, useState } from "react";
import Story from "../models/Story";
import StoriesContext from "./StoriesContext";

interface Props {
  children: ReactNode;
}

const StoriesContextProvider = ({ children }: Props) => {
  const [stories, setStories] = useState<Story[]>([
    {
      id: 1,
      author: "Ruhul",
      word1: "Detroit",
      word2: "Usama",
      word3: "asinine",
      word4: "student",
      word5: "7",
      word6: "families first",
    },
    {
      id: 2,
      author: "Sadi",
      word1: "Sylhet",
      word2: "Usama",
      word3: "asinine",
      word4: "student",
      word5: "19",
      word6: "families first",
    },
  ]);

  let nextId: number = 3;

  const addStory = (story: Story): void => {
    setStories((prev) => {
      story.id = nextId++;
      return [...prev, story];
    });
  };

  return (
    <StoriesContext.Provider value={{ stories, addStory }}>
      {children}
    </StoriesContext.Provider>
  );
};

export default StoriesContextProvider;
