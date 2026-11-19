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

  onSearch = (searchText) => {
    const lowerCaseSearchText = searchText.toLowerCase();
    const updatedNotes = this.state.notes.map((note) => {
      if (lowerCaseSearchText === "") {
        return {
          ...note,
          doesMatchSearch: true,
        };
      } else {
        return {
          ...note,
          doesMatchSearch:
            note.title.toLowerCase().includes(lowerCaseSearchText) ||
            note.description.toLowerCase().includes(lowerCaseSearchText),
        };
      }
    });
    this.setState({
      searchText: lowerCaseSearchText,
      notes: updatedNotes,
    });
  };

  render() {
    return (
      <div className="app">
        <Header
          searchText={this.state.searchText}
          addNote={this.addNote}
          onSearch={this.onSearch}
        />
        <NotesList notes={this.state.notes} onType={this.onType} />
      </div>
    );
  }
}

export default App;
