import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

import {dKipa} from "../../../declarations/dKipa";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => {
      dKipa.createNewNote(newNote.title, newNote.content)
      return [newNote, ...prevNotes];
    });
  }
  useEffect(() => {
    console.log("checking if it is logging");
    fetchdata();
  },[])

  function deleteNote(id) {
    dKipa.removeNote(id);
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  async function fetchdata (){
    const fetcheddata = await dKipa.retrieveNotes();
    setNotes(fetcheddata);
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
