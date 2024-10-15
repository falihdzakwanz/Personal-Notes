import React from 'react';
import NoteItem from './NoteItem';

class NoteList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showArchived: false,
        };

        this.toggleShowArchived = this.toggleShowArchived.bind(this);
    }

    toggleShowArchived() {
        this.setState((prevState) => ({
            showArchived: !prevState.showArchived,
        }));
    }

    render() {
        const { notes, deleteNote, toggleArchive } = this.props;
        const { showArchived } = this.state;

        const activeNotes = notes.filter(note => !note.archived);
        const archivedNotes = notes.filter(note => note.archived);

        return (
            <div className='notes-list'>
                <h2>Catatan Aktif</h2>
                {activeNotes.length === 0 ? (
                    <p>Tidak ada catatan</p>
                ) : (
                    activeNotes.map(note => (
                        <NoteItem key={note.id} note={note} deleteNote={deleteNote} toggleArchive={toggleArchive} />
                    ))
                )}

                <h2 onClick={this.toggleShowArchived} style={{ cursor: 'pointer' }}>
                    Arsip {showArchived ? '▲' : '▼'}
                </h2>
                {showArchived && (
                    archivedNotes.length === 0 ? (
                        <p>Tidak ada catatan di arsip</p>
                    ) : (
                        archivedNotes.map(note => (
                            <NoteItem key={note.id} note={note} deleteNote={deleteNote} toggleArchive={toggleArchive} />
                        ))
                    )
                )}
            </div>
        );
    }
}

export default NoteList;