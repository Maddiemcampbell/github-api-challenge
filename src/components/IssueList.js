import React from "react";
import moment from "moment";
import { sortableContainer, sortableElement } from "react-sortable-hoc";

import styled from "styled-components";

import { reorderIssues } from "../redux/actions/issuesActions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

const CardStyling = styled.li`
  list-style-type: none;
  cursor: pointer;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  width: 100%;
  margin: 20px 0px 20px 0px;
  padding: 10px;
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

const IssuesContainer = sortableContainer(({ children }) => {
    return <ul className="column">{children}</ul>;
});

const IssueList = ({ issues = [], actions }) => {
    console.log("issues", issues)
    const onSortEnd = ({ oldIndex, newIndex }) => {
        actions.reorderIssues(oldIndex, newIndex, issues);
    };
  return (
      <IssuesContainer onSortEnd={onSortEnd}>
        <h2>Issues</h2>
        {issues.map((issue, index) => (
            <IssueItem
                key={issue.id}
                index={index}
                title={issue.title}
                created={issue.created_at}
                img={issue.user.avatar_url}
          />
        ))}
      </IssuesContainer>
  );
};

function mapStateToProps({ repos, issues }) {
    return { repos, issues };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      actions: {
        reorderIssues: bindActionCreators(reorderIssues, dispatch)
      }
    };
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(IssueList);
