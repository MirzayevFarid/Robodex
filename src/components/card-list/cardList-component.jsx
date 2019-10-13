import React from 'react'
import './cardList-component.css'
import '../card/card-component'
import {Card} from "../card/card-component";
export const CardList = props =>
    (
        <div className='card-list'>
            {
                props.monsters.map(monster =>
                    (
                        <Card key={monster.id} monster={monster}/>
                    )
                )
            }
        </div>

    );
