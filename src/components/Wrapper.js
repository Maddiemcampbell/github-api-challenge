import React, { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { loadRepository } from "../redux/actions/reposActions";
import { loadIssues } from "../redux/actions/issuesActions";

import RepoList from "./RepoList";
import IssueList from "./IssueList";
import styled from "styled-components";

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Containers = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

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
      <div style={{padding: '40px'}}>
        <TextField id="filled-basic" 
            placeholder="Github Key"
            onChange={e => {
            e.preventDefault();
            setToken(e.target.value);
          }}/>
        <Button onClick={() => handleSubmit(token)} variant="contained" style={{backgroundColor: "blue", marginLeft: "20px"}} id="btn-submit">Submit</Button>
      </div>
      <Containers>
        {repos && (<RepoList handleClick={handleRepoSelection} repos={repos}/>)}
        {issues && (<IssueList issues={issues}/>)}
      </Containers>
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