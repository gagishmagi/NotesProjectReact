import React from 'react'

export default function Note(props) {
        return (
            <div className="singleNote" style={{ backgroundImage: "url('/images/note.png')"}}>
                <button className="close" onClick={() => props.delete(props.id)}>X</button>
                <p>{props.text}</p>
                <p>{props.date}</p>
                <p>{props.time}</p>
            </div>
        )
}
