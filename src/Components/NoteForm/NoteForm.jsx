import React, { Component } from 'react'

export default class NoteForm extends Component {

    constructor(props){
        super(props)
        this.state = {
            NoteData: '',
            NoteDate: '',
            NoteTime: '',
        }
    }

    updateState(e){
        if(e.target.id === "text")
            this.setState({ NoteData : e.target.value})
        else if(e.target.id === "date")
            this.setState({ NoteDate: e.target.value })
        else if(e.target.id === "time")
            this.setState({ NoteTime: e.target.value })
    }

    render() {
        // 3 Methods to fix context issue
        // 1. (event) => this.updateState(event)
        // 2. in constractor: this.updateState = this.updateState.bind(this)
        // 3. inline: this.updateState.bind(this) onEvent

        const text = this.state.NoteData;
        const date = this.state.NoteDate;
        const time = this.state.NoteTime;


        return (
            <div>
                <h1 id="h1">My Notes</h1>
                <div className="form">
                    <div id="myForm">
                        <textarea cols="30" rows="10" type="text" id="text" value={this.state.NoteData}
                        onChange={this.updateState.bind(this)}
                            ></textarea><br/><br/>
                        <label for="date">Date: </label>
                        <input type="date" onChange={this.updateState.bind(this)} value={this.state.NoteDate} id="date"/>
                        <label for="time">Time: </label>
                        <input type="time" onChange={this.updateState.bind(this)} value={this.state.NoteTime} id="time" />
                        <button className="btn" onClick={() => this.props.addNote(text,date,time)}>Add Note</button>
                        <button onClick={() => this.props.deleteAllNotes()}>Delete All</button>
                    </div>
                </div>
            </div>
        )
    }
}
