import React from "react";

const RepoList = ({ repos = [], handleClick }) => {
  return (
    <>
      <ul className="column">
        {repos.length ? <h1>Choose a Repository</h1> : ""}
        {repos.map(repo => {
          return (
            <p key={repo.id} onClick={() => handleClick(repo.url)}>
              <span>{repo.name}</span>
            </p>
          );
        })}
      </ul>
    </>
  );
};

export default RepoList;
