import React from 'react';
import { showFormattedDate } from '../utils';

function NoteItem({ note, deleteNote, toggleArchive }) {
    return (
        <div className="note-item">
            <h3>{note.title}</h3>
            <p className='item-date'>{showFormattedDate(note.createdAt)}</p>
            <p>{note.body}</p>
            <button 
                onClick={() => toggleArchive(note.id)}
                className='toggle-archive-button'
            >
                {note.archived ? 'Pindahkan' : 'Arsipkan'}
            </button>
            <button 
                onClick={() => deleteNote(note.id)}
                className='delete-button'    
            >Hapus</button>
        </div>
    );
}

export default NoteItem;