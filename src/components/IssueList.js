import React from "react";
import moment from "moment";
import { sortableContainer, sortableElement } from "react-sortable-hoc";
import styled from "styled-components";

const CardStyling = styled.li`
  list-style-type: none;
  cursor: pointer;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  width: 30%;
  margin: 20px 0px 20px 0px;
`;

const IssueItem = sortableElement(({ title, img, created, updated }) => {
    return (
      <CardStyling>
        <img src={img} alt="avatar" height="50px"/>
        <div style={{ fontWeight: "bold" }}> {title}</div>
        <div> Created : {moment(created).format("DD/MM/YYYY")}</div>
        <div> Updated : {" " + moment(updated).fromNow("DD") + " ago"}</div>
      </CardStyling>
    );
  });

const Container = sortableContainer(({ children }) => {
    return <ul className="column">{children}</ul>;
});

const IssueList = ({ issues = []}) => {
  return (
      <Container>
        <h2>Issues</h2>
        {issues.map((issue, index) => (
            <IssueItem
                key={issue.id}
                index={index}
                title={issue.title}
                created={issue.created_at}
                updated={issue.updated_at}
                img={issue.user.avatar_url}
          />
        ))}
      </Container>
  );
};

export default (IssueList);
