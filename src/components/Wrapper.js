import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { loadRepository } from "../redux/actions/reposActions";
import {
  loadIssues
} from "../redux/actions/issuesActions";

import RepoList from "./RepoList";
import IssueList from "./IssueList";

const Wrapper = ({ repos, actions, issues }) => {
    const [token, setToken] = useState("");

    const handleSubmit = async key => {
        try {
          await actions.loadRepository(key);
        } catch (error) {
          throw error;
        }
      };

      const handleRepoSelection = async url => {
        try {
          await actions.loadIssues(url);
        } catch (error) {
          throw error;
        }
      };

  return (
    <div>
      <div style={{padding: '20px'}}>
        <input placeholder="Github Key" style={{margin:'20px'}}
            onChange={e => {
            e.preventDefault();
            setToken(e.target.value);
          }}/>
        <button onClick={() => handleSubmit(token)}>Submit</button>
      </div>
      <div>
        {repos && (<RepoList handleClick={handleRepoSelection} repos={repos} />)}
        {issues && (<IssueList issues={issues} />)}
      </div>
    </div>
  );
};

function mapStateToProps({ repos, issues }) {
    return { repos, issues };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      actions: {
        loadRepository: bindActionCreators(loadRepository, dispatch),
        loadIssues: bindActionCreators(loadIssues, dispatch),
      }
    };
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Wrapper);