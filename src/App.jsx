import React from 'react';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';
import { getInitialData } from './utils';
import Navbar from './components/Navbar';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
      searchTerm: '',
    };

    this.addNote = this.addNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
    this.toggleArchive = this.toggleArchive.bind(this);
    this.setSearchTerm = this.setSearchTerm.bind(this);
  }

  addNote(note) {
    this.setState((prevState) => ({
      notes: [...prevState.notes, note],
    }));
  }

  deleteNote(id) {
    this.setState((prevState) => ({
      notes: prevState.notes.filter(note => note.id !== id),
    }));
  }

  toggleArchive(id) {
    this.setState((prevState) => ({
      notes: prevState.notes.map(note =>
        note.id === id ? { ...note, archived: !note.archived } : note
      ),
    }));
  }

  setSearchTerm(searchTerm) {
    this.setState({ searchTerm });
  }

  render() {
    const filteredNotes = this.state.notes.filter(note =>
      note.title.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    );

    return (
      <div className="app">
        <Navbar searchTerm={this.state.searchTerm} setSearchTerm={this.setSearchTerm} />
        <NoteForm addNote={this.addNote} />
        <NoteList notes={filteredNotes} deleteNote={this.deleteNote} toggleArchive={this.toggleArchive} />
      </div>
    );
  }
}

export default App;