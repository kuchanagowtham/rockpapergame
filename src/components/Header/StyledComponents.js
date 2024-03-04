import styled from 'styled-components'

export const Mainbg = styled.div`
  background-color: #223a5f;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`

export const Headercontainer = styled.div`
  display: flex;
  width: 50%;
  justify-content: space-between;
  border: solid;
  border-color: #ffffff;
  border-width: 2px;
  border-radius: 10px;
  margin-top: 50px;
  margin-bottom: 50px;
`
export const Names = styled.h1`
  margin-left: 20px;
  color: #ffffff;
  font-family: 'Bree Serif';
`
export const ScoreContainer = styled.div`
  background-color: #ffffff;
  margin-right: 10px;
  margin-bottom: 10px;
  margin-top: 10px;
  width: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`

export const ScoreText = styled.p`
  margin-bottom: 2px;
  font-size: 20px;
  font-family: 'Roboto';
  font-weight: 900;
`
export const ScoreNum = styled.p`
  margin-top: 2px;
  font-size: 25px;
  font-family: 'Roboto';
  font-weight: 900;
  margin-bottom: 2px;
`

export const RulesButton = styled.button`
  background-color: #ffffff;
  color: #223a5f;
  font-family: 'Bree Serif';
  height: 30px;
  width: 50px;
  border: none;
  outline: none;
  border-radius: 5px;
  margin-left: auto;
  margin-right: 20px;
`

export const GamestatusContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const DrawContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 350px;
`
export const PlayerSelection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 150px;
  color: #ffffff;
`

export const Image = styled.img`
  height: 150px;
  width: 150px;
`

export const PlayagainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const GameResult = styled.p`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 30px;
`

export const PlayAgainButton = styled.button`
  background-color: #ffffff;
  height: 50px;
  width: 200px;
  outline: none;
  border: none;
  font-family: 'Bree Serif';
  color: #223a5f;
  margin-bottom: 10px;
  border-radius: 10px;
`
export const Button = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
`
export const ViewGame = styled.div`
  width: 350px;
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const RulesContainer = styled.div`
  background-color: #ffffff;
  height: 500px;
  width: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    height: 300px;
    width: 300px;
  }
`

export const RulesImg = styled.img`
  height: 400px;
  width: 500px;
  @media (max-width: 768px) {
    height: 250px;
    width: 200px;
  }
`
export const CloseButton = styled.button`
  align-self: flex-end;
  margin-right: 20px;
  margin-bottom: 20px;
`
