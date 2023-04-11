import React, { useState, useRef } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import Button from "./Button";

function AddPostForm({ status, data }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [disableButton, setDisabled] = useState(true);
  const [disableTitle, setDisableTitle] = useState(false);
  const [disableDesc, setDisableDesc] = useState(false);
  const [disableCateg, setDisableCateg] = useState(false);
  const [disableReg, setDisableReg] = useState(false);
  const categRef = useRef(null);
  const regRef = useRef(null);

  useEffect(() => {
    if (!data) return;
    const { title, description, category, region } = data;
    setTitle(title);
    setDescription(description);
    categRef.current.value = category;
    regRef.current.value = region;
  }, [data]);

  const Categories = [
    "Trending",
    "Story",
    "Politics",
    "Sports",
    "Technology",
    "Science",
    "Video",
    "Health",
    "Entertainment",
    "Business",
    "Religion",
  ];

  const Region = [
    "Select Region",
    "Africa",
    "USA",
    "Nigeria",
    "Ghana",
    "South Africa",
  ];

  const handleInput = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "title":
        setTitle(value);
        break;
      case "description":
        setDescription(value);
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    title.length > 15 && description.length > 15
      ? setDisabled(false)
      : setDisabled(true);
  }, [title, description]);

  return (
    <FormElement>
      <Heading>{status}</Heading>
      <LayoutContainer>
        <FormGroup>
          <LabelElement>Select Category</LabelElement>
          <SelectInputElement disabled={disableCateg} ref={categRef}>
            {Categories.map((cat) => (
              <CategoryOption value={cat} key={cat}>
                {cat}{" "}
              </CategoryOption>
            ))}
          </SelectInputElement>
        </FormGroup>
        <FormGroup>
          <LabelElement>Select Region</LabelElement>
          <SelectInputElement disabled={disableReg} ref={regRef}>
            {Region.map((cat) => (
              <CategoryOption value={cat} key={cat}>
                {cat}{" "}
              </CategoryOption>
            ))}
          </SelectInputElement>
        </FormGroup>
      </LayoutContainer>
      <LayoutContainer>
        <FormGroup>
          <LabelElement htmlFor="title">Title</LabelElement>
          <TextInputElement
            type="text"
            name="title"
            id="title"
            placeholder="Enter post title"
            value={title}
            onChange={(e) => handleInput(e)}
            disabled={disableTitle}
          />
        </FormGroup>
        <FormGroup>
          <LabelElement htmlFor="description">Description</LabelElement>
          <TextAreaElement
            type="text"
            name="description"
            id="description"
            value={description}
            placeholder="Enter post description"
            onChange={(e) => handleInput(e)}
            disabled={disableDesc}
          />
        </FormGroup>
      </LayoutContainer>
      <FormGroup>
        <LabelElement htmlFor="post_images">Upload Post Images</LabelElement>
        <TextInputElement
          type="file"
          name="post_images"
          id="post_images"
          multiple
        />
      </FormGroup>
      <Button
        name={disableButton ? "Disabled" : "Create Post"}
        func={(e) => {
          e.preventDefault();
          e.target.classList.add("activateSpinner");
          setDisableTitle(true);
          setDisableDesc(true);
          setDisableCateg(true);
          setDisableReg(true);
          console.log(e.target);
        }}
        extraStyle={{
          width: "200px",
          padding: "0.7rem 1.1rem",
          marginTop: "2rem",
          backgroundColor: disableButton ? "gray" : "var(--secondaryBlue)",
          color: "#fff",
          marginLeft: "auto",
          marginRight: 0,
          display: "flex",
          justifyContent: "center",
        }}
        disabled={disableButton}
      >
        <SpinnerElement className="spinner"></SpinnerElement>
      </Button>
    </FormElement>
  );
}

const FormElement = styled.form`
  background-color: var(--secondaryWhite);
  padding: 1rem;
  padding-top: 1rem;
  border-radius: 0.4rem;
  font-family: "PT Sans Narrow", sans-serif !important;

  & > * {
    font-family: inherit !important;
  }
`;

const LabelElement = styled.label`
  display: inline-block;
  font-weight: 500;
  margin-bottom: 0.5rem;
  font-family: "PT Sans Narrow", sans-serif;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const TextInputElement = styled.input`
  border: none;
  outline: none;
  border-radius: 0.4rem;
  padding: 1rem;
  background-color: var(--primaryWhite);
  color: var(--secondaryBlue);
  font-weight: 600;
  font-size: 0.9rem;
  font-family: "PT Sans Narrow", sans-serif;
`;

const TextAreaElement = styled.textarea`
  border: none;
  outline: none;
  border-radius: 0.4rem;
  padding: 0.8rem 1rem;
  background-color: var(--primaryWhite);
  color: var(--secondaryBlue);
  font-weight: 600;
  resize: vertical;
  font-size: 1rem;
  max-height: 120px;
  font-family: "PT Sans Narrow", sans-serif;
`;

const SpinnerElement = styled.span`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border-color: transparent #ffffffb3 #ffffffd9 #fff;
  border-width: 1px;
  border-style: solid;
  margin-right: 1rem;
  display: none;
`;

const SelectInputElement = styled.select`
  border: none;
  outline: none;
  border-radius: 0.4rem;
  padding: 0.6rem 1rem;
  background-color: var(--primaryWhite);
  color: gray;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  font-family: "PT Sans Narrow", sans-serif;
`;
const CategoryOption = styled.option`
  padding: 1rem;
  margin: 1rem;
  display: inline-block;
  font-family: inherit;
`;

const LayoutContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 4fr;
  gap: 4rem;
`;

const Heading = styled.h2`
  color: var(--primaryBlue);
  margin-bottom: 1rem;
`;

export default AddPostForm;
export { Heading, TextInputElement, SpinnerElement };
