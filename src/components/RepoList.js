import React from "react";
import styled from "styled-components";

const Repo = styled.li`
  :hover {
    font-weight: bold;
    cursor: pointer;
    color: blue;
  }
  list-style-type: none;
`;

const RepoList = ({ repos = [], handleClick }) => {
  return (
    <>
      <ul className="column">
        {repos.length ? <h2>Choose a Repository</h2> : ""}
        {repos.map(repo => {
          return (
            <Repo key={repo.id} onClick={() => handleClick(repo.url)}>
              <span>{repo.name}</span>
            </Repo>
          );
        })}
      </ul>
    </>
  );
};

export default RepoList;
