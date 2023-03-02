import React from "react"

export default function Header() {
    return (
        <header className="header">
            <img 
                src="./cat.png" 
                className="header--image"
                alt="Look at Cat Memes!"
            />
            <h2 className="header--title">Meme-meow Generator</h2>
            <h4 className="header--project">Purrr-fect!</h4>
        </header>
    )
}