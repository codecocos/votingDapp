// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Voting {
  
  // 구조체
  struct Candidate {
    string name;
    string party;
  }

  // 구조체의 배열
  Candidate[] public candidates;

  // 후보자 등록 함수
  function registerCandidate(string memory _name, string memory _party) public {
    candidates.push(Candidate(_name, _party));
  }

}