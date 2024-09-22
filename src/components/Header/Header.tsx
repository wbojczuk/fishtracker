import React from 'react'
import "./header.css"
import RandomFish from '../RandomFish/RandomFish'

export default function Header(props: {fishData: fishType[]}) {
  return (
    <header className={"header"}>

        <h1>All Freshwater Fish Of Georgia Catch Tracker</h1>

        <div className="center">
            <RandomFish fishData={props.fishData} />
        </div>
    
        <img src='/img/header-bg.png' alt='Image of Fish' className='bg-img' />
        <div className='shader'></div>
    </header>
  )
}
