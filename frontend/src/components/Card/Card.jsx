import React, { useState, useEffect } from 'react'
import './Card.css'
import Like from '../../components/Like/Like'

const Card = props => {

    const [liked, setLiked] = useState(false)
    const [likesCount, setLikesCount] = useState(0)

    const dateHandler = rawDate => {
        const tempDate = new Date(rawDate)
        const month = tempDate.toLocaleString('default', { month: 'long'} )
        const day = tempDate.getDate()
        const newDate = `${day} ${month.slice(0,3)}`
        
        return newDate
    }

    const handleLike = bool => {
        setLiked(bool)
        bool ? setLikesCount(likesCount + 1) : setLikesCount(likesCount - 1)
        props.onLike(props.id)
    }

    useEffect(() => {
        setLikesCount(props.likes)
    }, [props.likes])

    useEffect(() => {
        setLiked(props.liked)
    }, [props.liked])

    return (
        <div className="Card" onClick={e => props.onClick(e, props.id)}>
            <img className="Card__photo" src={'http://localhost:5000/' + props.path} alt=""/>
            <div className="Card__info">
                <div className="Card__title" style={{color: liked && '#ffbd69'}}>{props.title}</div>
                <Like id={props.id} isLiked={liked} onLike={handleLike} count={likesCount}/>
                <div className="Card__date">{dateHandler(props.date)}</div>
            </div>
        </div>
    )
}

export default Card