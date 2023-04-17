import { ImageCard } from "../util/imageCard";

const mockdata = [
  {
    id: 1,
    title: "test1",
    description: "test1",
    img: "../styles/pro.png",
    author: "amj",
  },
  {
    id: 2,
    title: "test2",
    description: "test2",
    img: "../styles/pro.png",
    author: "amj",
  },
  {
    id: 3,
    title: "test3",
    description: "test3",
    img: "../styles/pro.png",
    author: "amj",
  },
  {
    id: 4,
    title: "test4",
    description: "test4",
    img: "../styles/pro.png",
    author: "amj",
  },
];

export default function Projects() {
  const projects = mockdata.map((project) => (
    <ImageCard
      key={project.id}
      image={project.img}
      title={project.title}
      author={project.author}
      views={123}
      comments={134}
      link={"google.com"}
    />
  ));
  return <div>{projects}</div>;
}
