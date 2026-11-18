import "./App.css";
import Header from "./Header.jsx";
import NotesList from "./NotesList.jsx";
import { Component } from "react";

class App extends Component {
  state = {
    notes: [
      {
        id: Date.now(),
        title: "",
        description: "",
        doesMatchSearch: true,
      },
    ],
    searchText: "",
  };

  addNote = () => {
    const newNote = {
      id: Date.now(),
      title: "",
      description: "",
      doesMatchSearch: true,
    };

    const newNotes = [newNote, ...this.state.notes];

    this.setState({
      notes: newNotes,
    });
  };

  onType = (id, property, value) => {
    const updatedNotes = this.state.notes.map((note) => {
      if (note.id === id) {
        return {
          ...note,
          [property]: value,
        };
      } else {
        return note;
      }
    });

    this.setState({
      notes: updatedNotes,
    });
  };

  render() {
    return (
      <div className="app">
        <Header searchText={this.state.searchText} addNote={this.addNote} />
        <NotesList notes={this.state.notes} onType={this.onType}/>
      </div>
    );
  }
}

export default App;
