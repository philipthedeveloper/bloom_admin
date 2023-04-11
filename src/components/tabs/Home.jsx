import { useState } from "react";
// import data from "../../constants/dummy";
import EditPost from "../EditPost/EditPost";
import "./home.css";
import Button from "../Button";
import AddPostForm from "../AddPostForm";

const Home = () => {
  const [currentOp, setCurrentOp] = useState("");
  const [data, setData] = useState(null);
  const handleEdit = (val) => {
    setCurrentOp("add post");
    setData(val);
  };

  return (
    <div className="home_section">
      <div className="button_container">
        <Button
          name={"Add Post"}
          func={() => {
            setCurrentOp("add post");
            setData(null);
          }}
        />
        <Button name={"Edit Post"} func={() => setCurrentOp("edit post")} />
        <Button name={"Delete Post"} func={() => setCurrentOp("delete post")} />
      </div>
      {currentOp === "add post" && !data && (
        <AddPostForm status={"Add Post"} data={data} />
      )}
      {currentOp === "add post" && data && (
        <AddPostForm status={"Edit Post"} data={data} />
      )}
      {currentOp === "edit post" && (
        <EditPost state={"Edit Post"} func={handleEdit} />
      )}
      {currentOp === "delete post" && <EditPost state={"Delete Post"} />}
    </div>
  );
};

export default Home;
