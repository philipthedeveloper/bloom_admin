import React from "react";
import styled from "styled-components";

function ResultCard({ data, func }) {
  const {
    title,
    description,
    views,
    commentCount,
    likes,
    publicationDate,
    author,
  } = data;
  return (
    <CardContainer onClick={() => func(data)}>
      <CardImgContainer>
        <CardImg src="./adaptive_icon.png" alt={`${title} img`} />
      </CardImgContainer>
      <CardInfo>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{`${description.slice(0, 200)}...`}</CardDescription>
      </CardInfo>
      <CardFooter>
        <FooterIcon>
          <i className="fi fi-rr-eye"></i>
          {views}
        </FooterIcon>
        <FooterIcon>
          <i className="fi fi-rr-comment-quote"></i>
          {commentCount}
        </FooterIcon>
        <FooterIcon>
          <i className="fi fi-sr-heart"></i>
          {likes}
        </FooterIcon>
        <FooterIcon>
          <i className="fi fi-rr-calendar"></i>
          {publicationDate}
        </FooterIcon>
        <FooterIcon>
          <i className="fi fi-sr-pencil"></i>
          {author}
        </FooterIcon>
      </CardFooter>
    </CardContainer>
  );
}

const CardContainer = styled.div`
  background-color: var(--secondaryWhite);
  display: flex;
  padding: 0.8rem;
  border-radius: 0.4rem;
  margin-top: 1rem;
  margin-right: 1rem;
  cursor: pointer;
`;
const CardImgContainer = styled.div`
  width: 100px;
  border-radius: 0.4rem;
  // overflow: hidden;
  background-color: var(--primaryBlue);
  height: 80px;
  flex-shrink: 0;
  margin-right: 1rem;
`;
const CardImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const CardInfo = styled.div`
  max-width: 650px;
`;
const CardTitle = styled.h4``;
const CardDescription = styled.p`
  font-size: 0.9rem;
  margin-top: 0.5rem;
`;
const CardFooter = styled.footer`
  display: flex;
  flex-direction: column;
`;
// const CardIcon = styled.span``;
const FooterIcon = styled.span`
  font-size: 0.75rem;
  margin-bottom: 0.1rem;

  i {
    margin-right: 0.4rem;
  }
`;
export default ResultCard;
