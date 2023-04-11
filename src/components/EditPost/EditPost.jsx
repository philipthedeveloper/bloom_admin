import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { Heading, SpinnerElement, TextInputElement } from "../AddPostForm";
import Button from "../Button";
import ResultCard from "../ResultCard";
import data from "../../constants/dummy";

function EditPost({ state, func }) {
  const [display, setDisplay] = useState("none");
  const [searchby, setSearchby] = useState("Title");
  const [searchText, setSearchText] = useState("");
  const [spinning, setSpinning] = useState(false);
  const [searchResult, setSearchResult] = useState(null);

  const handleInput = (e) => {
    const { value } = e.target;
    setSearchText(value);
  };
  const handleFilterBtnPress = () => {
    switch (display) {
      case "none":
        setDisplay("block");
        break;
      case "block":
        setDisplay("none");
        break;
      default:
        break;
    }
  };

  const handleSearch = (e) => {
    if (searchText.length < 5) {
      return;
    }
    setSpinning(true);
    setTimeout(() => {
      setSpinning(false);
      setSearchResult(data);
    }, 2000);
  };

  return (
    <EditPostContainer>
      <Heading>{state}</Heading>
      <HeaderElement>
        <FilterContainer>
          <FilterText>Search by: </FilterText>
          <Button
            extraStyle={{ marginRight: 0 }}
            func={() => handleFilterBtnPress()}
          >
            <i className="fi fi-rr-filters"></i>
          </Button>
          <SearchbyElement>{searchby}</SearchbyElement>
          <SelectElement display={display}>
            {["Author", "Title"].map((type) => (
              <OptionElement
                key={type}
                onClick={() => {
                  handleFilterBtnPress();
                  setSearchby(type);
                }}
              >
                {type}
              </OptionElement>
            ))}
          </SelectElement>
        </FilterContainer>
        <Layout>
          <TextInputElement
            type={"text"}
            placeholder={`Enter ${searchby}`}
            value={searchText}
            onChange={(e) => handleInput(e)}
            style={{
              backgroundColor: "var(--secondaryWhite)",
              width: searchText.length * 3.2 + 200,
              paddingTop: "0.7rem",
              paddingBottom: "0.7rem",
            }}
          />
          <Button
            name={"Search"}
            extraStyle={{
              boxShadow: "inset 0px 0px 6px var(--primaryWhite)",
              marginLeft: "0.8rem",
              paddingBottom: "0.7rem",
              paddingTop: "0.7rem",
            }}
            func={() => handleSearch()}
          />
        </Layout>
      </HeaderElement>
      <ResultContainer>
        {searchResult?.length > 0 && spinning === false ? (
          <>
            <ResultCard data={searchResult[0]} func={func} />
            <ResultCard data={searchResult[0]} func={func} />
            <ResultCard data={searchResult[0]} func={func} />
            <ResultCard data={searchResult[0]} func={func} />
            <ResultCard data={searchResult[0]} func={func} />
          </>
        ) : (
          <ResultTextContainer>
            {spinning && (
              <SpinnerElement
                style={{
                  width: 70,
                  height: 70,
                  display: "block",
                  borderWidth: 4,
                  borderColor: "transparent #ffffff52 #ffffff8c #fff",
                }}
                className={"spinner"}
              />
            )}
            <ResultText>
              {" "}
              {searchResult === null &&
                spinning === false &&
                `📪\n No Post To ${
                  state === "Edit Post" ? "Edit" : "Delete"
                }...`}
            </ResultText>
          </ResultTextContainer>
        )}
      </ResultContainer>
    </EditPostContainer>
  );
}

const EditPostContainer = styled.div`
  padding: 1rem;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const HeaderElement = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

const FilterText = styled.p`
  margin-right: 0.5rem;
`;

const SelectElement = styled.ul`
  background-color: var(--secondaryWhite);
  border-radius: 0.2rem;
  overflow: hidden;
  position: absolute;
  top: 50px;
  right: 0;
  z-index: 10;
  display: ${(props) => props.display};
`;
const OptionElement = styled.li`
  padding: 0.5rem 1.5rem;
  cursor: pointer;
  transition: 0.4s ease;

  &:hover {
    background-color: var(--primaryBlue);
    color: var(--primaryWhite);
  }
`;

const SearchbyElement = styled.p`
  margin-left: 0.4rem;
`;

const ResultContainer = styled.div`
  margin-top: 1rem;
  height: 65%;
  overflow-y: auto;
  margin-bottom: 1rem;
`;
const ResultTextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
const ResultText = styled.h3`
  color: var(--primaryBlue);
`;

const Layout = styled.div`
  margin-right: auto;
  margin-left: auto;
`;

export default EditPost;
