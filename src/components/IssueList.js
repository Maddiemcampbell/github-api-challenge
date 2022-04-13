import React from "react";
import { connect } from "react-redux";
import moment from "moment";


const IssueList = ({ issues = [], actions }) => {
  return (
      <div>
        <h1>Issues</h1>
        {issues.map((issue, index) => (
            <div>
          <li key={issue.id}>{issue.title}</li>
          <img src={issue.user.avatar_url} alt="avatar" />
        <div> Created : {moment(issue.created_at).format("DD/MM/YYYY")}</div>
        <div> Updated : {" " + moment(issue.updated_at).fromNow("DD") + " ago"}</div>
        </div>
        ))}
      </div>
  );
};

function mapStateToProps({ repos, issues }) {
  return { repos, issues };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(IssueList);
