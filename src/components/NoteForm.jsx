import React from 'react';

class NoteForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: '',
        }

        this.titleChangeEventHandler = this.titleChangeEventHandler.bind(this);
        this.bodyChangeEventHandler = this.bodyChangeEventHandler.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    titleChangeEventHandler(event) {
        const newTitle = event.target.value.slice(0, 50);
        this.setState(() => {
            return {
                title: newTitle,
            }
        });
    }

    bodyChangeEventHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value,
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.addNote({
            ...this.state,
            id: +new Date(),
            archived: false,
            createdAt: new Date().toISOString(),
        });
        this.setState({
            title: '',
            body: '',
        });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h2>Tambah Catatan</h2>
                <p>Sisa karakter: {50 - this.state.title.length}</p>
                <input
                    type="text"
                    value={this.state.title}
                    onChange={this.titleChangeEventHandler}
                    placeholder="Judul"
                    required
                />
                <textarea
                    value={this.state.body}
                    onChange={this.bodyChangeEventHandler}
                    placeholder="Isi catatan"
                    required
                />
                <button type="submit" className='add-button'>Tambah</button>
            </form>
        );
    }
}


export default NoteForm;