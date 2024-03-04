import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import {Component} from 'react'
import {
  Mainbg,
  Headercontainer,
  Names,
  ScoreContainer,
  ScoreText,
  ScoreNum,
  RulesButton,
  GamestatusContainer,
  DrawContainer,
  PlayerSelection,
  Image,
  PlayagainContainer,
  GameResult,
  PlayAgainButton,
  Button,
  ViewGame,
  CloseButton,
  RulesContainer,
  RulesImg,
} from './StyledComponents'
import './index.css'

const gameConstains = {
  inPrograss: 'INPrograss',
  won: 'WON',
  lose: 'LOOSE',
  draw: 'DRAW',
}

class Header extends Component {
  state = {
    prograss: gameConstains.INPrograss,
    score: 0,
    playerId: '',
    opponentId: '',
  }

  getId = myId => {
    const {choicesList} = this.props

    const playerId = myId
    this.setState({playerId})

    const randomNumber = Math.floor(Math.random() * choicesList.length)
    const opponentId = choicesList[randomNumber].id
    this.setState({opponentId})

    if (playerId === opponentId) {
      this.setState({prograss: 'DRAW'})

      // Return the gameDraw result if it's a draw
    } else if (
      (playerId === 'ROCK' && opponentId === 'SCISSORS') ||
      (playerId === 'SCISSORS' && opponentId === 'PAPER') ||
      (playerId === 'PAPER' && opponentId === 'ROCK')
    ) {
      this.setState({prograss: 'WON'})
      this.setState(prevState => ({score: prevState.score + 1}))
    } else {
      this.setState({prograss: 'LOOSE'})
      this.setState(prevState => ({score: prevState.score - 1}))
    }
  }

  handlePlayAgain = () => {
    this.setState({prograss: gameConstains.INPrograss})
  }

  gameDrawView = () => {
    const {choicesList} = this.props
    const {playerId, opponentId} = this.state
    const player = choicesList.find(each => each.id === playerId)
    const playerImg = player.imageUrl
    const opponent = choicesList.find(each => each.id === opponentId)
    const opponentImg = opponent.imageUrl
    return (
      <GamestatusContainer className="game-status-container">
        <DrawContainer className="draw-container">
          <PlayerSelection className="player-selection ">
            <h1>YOU</h1>
            <Image className="image" src={playerImg} alt="your choice" />
          </PlayerSelection>
          <PlayerSelection className="player-selection">
            <h1>OPPONENT</h1>
            <Image className="image" src={opponentImg} alt="opponent choice" />
          </PlayerSelection>
        </DrawContainer>
        <PlayagainContainer className="play-again-container">
          <GameResult className="game-status"> IT IS DRAW</GameResult>
          <PlayAgainButton
            type="button"
            className="playAgain"
            onClick={this.handlePlayAgain}
          >
            PLAY AGAIN
          </PlayAgainButton>
        </PlayagainContainer>
      </GamestatusContainer>
    )
  }

  gameWonView = () => {
    const {choicesList} = this.props
    const {playerId, opponentId} = this.state
    const player = choicesList.find(each => each.id === playerId)
    const playerImg = player.imageUrl
    const opponent = choicesList.find(each => each.id === opponentId)
    const opponentImg = opponent.imageUrl

    return (
      <GamestatusContainer>
        <DrawContainer>
          <PlayerSelection>
            <h1>YOU</h1>
            <Image src={playerImg} alt="your choice" />
          </PlayerSelection>
          <PlayerSelection>
            <h1>OPPONENT</h1>
            <Image src={opponentImg} alt="opponent choice" />
          </PlayerSelection>
        </DrawContainer>
        <PlayagainContainer>
          <GameResult>YOU WON</GameResult>
          <PlayAgainButton type="button" onClick={this.handlePlayAgain}>
            PLAY AGAIN
          </PlayAgainButton>
        </PlayagainContainer>
      </GamestatusContainer>
    )
  }

  gameLooseView = () => {
    const {choicesList} = this.props
    const {playerId, opponentId} = this.state
    const player = choicesList.find(each => each.id === playerId)
    const playerImg = player.imageUrl
    const opponent = choicesList.find(each => each.id === opponentId)
    const opponentImg = opponent.imageUrl

    return (
      <GamestatusContainer>
        <DrawContainer>
          <PlayerSelection>
            <h1>YOU</h1>
            <Image src={playerImg} alt="your choice" />
          </PlayerSelection>
          <PlayerSelection>
            <h1>OPPONENT</h1>
            <Image src={opponentImg} alt="opponent choice" />
          </PlayerSelection>
        </DrawContainer>
        <PlayagainContainer>
          <GameResult>YOU LOSE</GameResult>
          <PlayAgainButton type="button" onClick={this.handlePlayAgain}>
            PLAY AGAIN
          </PlayAgainButton>
        </PlayagainContainer>
      </GamestatusContainer>
    )
  }

  gameView = () => {
    const {choicesList} = this.props
    return (
      <ViewGame>
        {choicesList.map(each => (
          <Button
            key={each.id}
            type="button"
            data-testid={`${each.id.toLowerCase()}Button`}
            onClick={() => this.getId(each.id, each.imageUrl)}
          >
            {' '}
            <Image src={each.imageUrl} alt={each.id} />
          </Button>
        ))}
      </ViewGame>
    )
  }

  loadGameView = () => {
    const {prograss} = this.state

    switch (prograss) {
      case gameConstains.INPrograss:
        return this.gameView()

      case gameConstains.draw:
        return this.gameDrawView()

      case gameConstains.won:
        return this.gameWonView()

      case gameConstains.lose:
        return this.gameLooseView()
      default:
        return null
    }
  }

  render() {
    const {score} = this.state

    return (
      <Mainbg>
        <Headercontainer>
          <Names>
            ROCK <br />
            PAPER
            <br />
            SCISSORS
          </Names>
          <ScoreContainer>
            <ScoreText>Score</ScoreText>
            <ScoreNum>{score}</ScoreNum>
          </ScoreContainer>
        </Headercontainer>
        {this.loadGameView()}
        <div>
          <Popup
            modal
            trigger={
              <div className="rulescon">
                <RulesButton type="button" className="trigger-button">
                  RULES
                </RulesButton>
              </div>
            }
          >
            {close => (
              <RulesContainer>
                <CloseButton type="button" onClick={() => close()}>
                  {' '}
                  <RiCloseLine />
                </CloseButton>

                <RulesImg
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                />
              </RulesContainer>
            )}
          </Popup>
        </div>
      </Mainbg>
    )
  }
}

export default Header
