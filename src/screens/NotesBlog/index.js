
import React, { Component } from "react";
// Material UI
import {
  Container,
  List,
  ListItem,
  ListItemText,
  TextField,
} from "@material-ui/core";
import { Button } from '@material-ui/core'
// CSS


class NotesBlog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes:
        [
          { title: "My first note", content: "This is an amazing note!" },
          { title: "My first note", content: "This is an amazing note!" },
        ],
      noteTitle: "",
      noteContent: "",
    };
    this.handleChangeInput = this.handleChangeInput.bind(this)
    this.handleOnSubmit = this.handleOnSubmit.bind(this)
  }

  handleOnSubmit(event) {
    event.preventDefault()

    const { noteTitle, noteContent, notes } = this.state
    const newNotes = [...notes, { title: noteTitle, content: noteContent }]
    this.setState({
      notes: newNotes,
      noteTitle: "",
      noteContent: "",

    })
    console.log()

  }

  handleChangeInput({ target: { name, value } }) {
    this.setState({
      [name]: value
    })

  }


  render() {
    const { noteTitle, noteContent, notes } = this.state;
    const UINotes = notes.map(({ title, content }, index) => (
      <ListItem key={index} className="List-item">
        <ListItemText primary={title} secondary={content} />
      </ListItem>
    ));
    return (
      <>
        <Container maxWidth="md">
          <List dense={false}>{UINotes}</List>
        </Container>
        <Container maxWidth="md">
          <form onSubmit={this.handleOnSubmit}>
            <TextField
              className="input"
              value={noteTitle}
              onChange={this.handleChangeInput}
              name="noteTitle"
              label="Titulo"
              variant="outlined"
            />
            <TextField
              className="input"
              value={noteContent}
              onChange={this.handleChangeInput}
              name="noteContent"
              label="Contenido"
              variant="outlined"
            />
            <Button type="submit" variant="contained" color="primary">CLICK TO SAVE</Button>
          </form>
        </Container>
      </>
    );
  }
}
export default NotesBlog;