import React, { Component } from 'react'
import NoteForm from '../NoteForm/NoteForm'
import Note from '../Note/Note'

export default class Board extends Component {


    constructor(){
        super()
        this.state = {
            id: 0,
            NotesArr: (localStorage.getItem("notesArr")) ? JSON.parse(localStorage.getItem("notesArr")) : []
        }
        this.addNote = this.addNote.bind(this)
        this.deleteAllNotes = this.deleteAllNotes.bind(this)
        this.deleteNote = this.deleteNote.bind(this)
   }


    addNote(text, date, time) {
        let id = this.state.id;
        id++;
        // let myArr = Object.assign([],this.state.NotesArr);
        let myArr = [...this.state.NotesArr];
        let note = {
            id,
            NoteData: text,
            NoteDate: date,
            NoteTime: time
        }
        // myArr.push(<Note key={id} title="Note" text={note.NoteData} date={note.NoteDate} time={note.NoteTime} />)
        myArr.push(note)

        localStorage.setItem("notesArr", JSON.stringify(myArr))
        this.setState({ id, NotesArr: myArr })

    }



    deleteAllNotes() {
        localStorage.removeItem("notesArr")
        this.setState({ id: 0, NotesArr: [] })
    }


    deleteNote(id) {
        let myArr = [...this.state.NotesArr];
        myArr = myArr.filter((note) => {
            return (note.id !== id)
        });
        localStorage.setItem("notesArr", JSON.stringify(myArr))
        this.setState({ NotesArr: myArr })
    }



    render() {
        return (
            <div>
                <NoteForm addNote={this.addNote} deleteAllNotes={this.deleteAllNotes}/>

                <div className="notes">
                    {
                        this.state.NotesArr.map((note) =>
                            <Note key={note.id} id={note.id} title="Note" text={note.NoteData} date={note.NoteDate} time={note.NoteTime} delete={this.deleteNote} />
                        )

                    }
                </div>

                {/* {this.state.NotesArr} */}


            </div>
        )
    }
}
