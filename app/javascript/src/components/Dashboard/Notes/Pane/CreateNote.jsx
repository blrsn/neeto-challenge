import React from "react";

import { Pane, Typography, Toastr } from "neetoui/v2";

import formInitialValues from "constants/formInitialValues";

import Form from "./Form";

export default function NewNotePane({
  notes,
  setNotes,
  showPane,
  setShowPane,
}) {
  const onClose = () => setShowPane(false);

  const handleCreate = newNote => {
    newNote.id = notes[notes.length - 1].id + 1;
    newNote.time = "2 hours ago";
    newNote.action = "Created";
    newNote.tag = newNote.tag.label;
    (newNote.img = `https://randomuser.me/api/portraits/thumb/men/5.jpg`),
      setNotes(notes => [...notes, newNote]);
    setShowPane(false);
    Toastr.success("Note has been added successfully");
  };

  return (
    <Pane isOpen={showPane} onClose={onClose}>
      <Pane.Header>
        <Typography style="h2" weight="semibold">
          Create a New Note
        </Typography>
      </Pane.Header>
      <Form
        onClose={onClose}
        refetch={setNotes}
        note={formInitialValues.notesForm}
        isEdit={false}
        handleSubmit={handleCreate}
      />
    </Pane>
  );
}
