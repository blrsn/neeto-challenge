import React, { useState } from "react";

import EmptyNotesListImage from "images/EmptyNotesList";
import { Plus } from "neetoicons";
import { Button } from "neetoui/v2";
import { Container, Header } from "neetoui/v2/layouts";

import EmptyState from "components/Common/EmptyState";

import Card from "./Card";
import DeleteAlert from "./DeleteAlert";
import Menu from "./Menu";
import NewNotePane from "./Pane/CreateNote";
import { SAMPLE_NOTES } from "./sampleNotes";

const Notes = () => {
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showMenu, setShowMenu] = useState(true);
  const [selectedNoteId, setSelectedNoteId] = useState();
  const [showNewNotePane, setShowNewNotePane] = useState(false);
  const [notes, setNotes] = useState(SAMPLE_NOTES);

  return (
    <>
      <Menu showMenu={showMenu} />
      <Container>
        <Header
          title="All Notes"
          menuBarToggle={() => setShowMenu(!showMenu)}
          actionBlock={
            <Button label="Add Note" icon={Plus} onClick={setShowNewNotePane} />
          }
          searchProps={{
            value: searchTerm,
            onChange: e => setSearchTerm(e.target.value),
          }}
        />

        {notes.length ? (
          <div className="w-full space-y-6">
            {notes.map(note => (
              <Card
                key={note.id}
                note={note}
                setSelectedNoteId={setSelectedNoteId}
                setShowDeleteAlert={setShowDeleteAlert}
              />
            ))}
          </div>
        ) : (
          <EmptyState
            image={EmptyNotesListImage}
            title="Looks like you don't have any notes!"
            subtitle="Add your notes to send customized emails to them."
            primaryActionLabel="Add New Note"
          />
        )}
        <NewNotePane
          showPane={showNewNotePane}
          setShowPane={setShowNewNotePane}
          setNotes={setNotes}
          notes={notes}
        />
        {showDeleteAlert && (
          <DeleteAlert
            selectedNoteId={selectedNoteId}
            onClose={() => setShowDeleteAlert(false)}
            setNotes={setNotes}
          />
        )}
      </Container>
    </>
  );
};

export default Notes;
