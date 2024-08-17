import PostList from "./PostList";

const MainContent = () => {
  return (
    <div className=" min-h-screen px-20">
      <div className="font-semibold py-10 text-3xl">
        <p>BLOGS</p>
      </div>
      <div className="flex gap-4">
        <PostList />
        <PostList />
        <PostList />
        <PostList />
      </div>
    </div>
  );
};

export default MainContent;
