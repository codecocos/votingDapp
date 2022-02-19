const Voting = artifacts.require('Voting');


//[deployer,user1,user2] : ganache-cli에서 생성한 주소가 차례대로 들어옴.
contract('Voting', function ([deployer, user1, user2]) {

  let voting;

  // 테스트용 배포
  // new(): 빈칸이면 무조건 0번이 배포자가 됨.
  beforeEach(async () => {
    //console.log('beforeEach');
    voting = await Voting.new();
  })

  describe('Candidate', function () {

    it.only('register candidate', async () => {

      await voting.registerCandidate(0, 'coco', 'happy')
      await voting.registerCandidate(1, 'blackStone', 'happy')

      console.log(await voting.getCandidates(0));
      console.log('/////////////////////////////');
      console.log(await voting.getCandidates(1));

    })
  })
})