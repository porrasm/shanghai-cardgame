import style from './playerTable.module.scss'
import { useContext, useState } from "react"
import { GameContext } from "../context/gameContext"
import { CardCollection } from "./cardCollection"
import { ActionResponse, Card, GamePlayer } from 'shared'
import { PlayerActions } from './playerActions'
import { filter } from 'lodash'
import { FanValues } from './playingCard'

export const PlayerTable = () => {
    const [orderByRank, setOrderByRank] = useState(false)

    const { myPlayerId, game: { state }, actionResponse, hiddenCards } = useContext(GameContext)

    const myPlayer = state.players.find((p: GamePlayer) => p.id === myPlayerId)

    if (!myPlayer) {
        return <div>Error</div>
    }

    const orderByRankFunc = (card: Card) => card.rank

    const filteredCards = filter(myPlayer.cards, card => !hiddenCards.includes(card.id))

    const fan: FanValues = {
        curve: 2,
        distance: 50,
        offset: 2,
        size: 150
    }

    return <div className={style.playerArea}>
        <div className={style.cardContainer}>
            <InfoMessage success={actionResponse.success} message={actionResponse.message} error={actionResponse.error} />
            <button onClick={() => setOrderByRank(prev => !prev)}>
                Toggle order
            </button>
            <div className={style.cardsInner}>
                <CardCollection cards={filteredCards} fan={fan} order={orderByRank ? orderByRankFunc : undefined} allowCardSelect={true} />
            </div>
        </div>
        <PlayerActions />
    </div>
}


const InfoMessage = ({ success, message, error }: ActionResponse) => {
    const messageText = message ?? (success ? "Succesfully completed action" : undefined)
    return <div className={style.infoMessage}>
        {!!messageText && <span className={style.message}>{messageText}</span>}
        {!!error && <span className={style.error}>{error}</span>}
    </div>
}