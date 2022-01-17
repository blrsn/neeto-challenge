import React, { useState } from "react";

import EmptyNotesListImage from "images/EmptyNotesList";
import { Plus } from "neetoicons";
import { Button } from "neetoui/v2";
import { Container, Header } from "neetoui/v2/layouts";

import EmptyState from "components/Common/EmptyState";

import Card from "./Card";
import Menu from "./Menu";
import { SAMPLE_NOTES } from "./sampleNotes";

const Notes = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showMenu, setShowMenu] = useState(true);

  return (
    <>
      <Menu showMenu={showMenu} />
      <Container>
        <Header
          title="All Notes"
          menuBarToggle={() => setShowMenu(!showMenu)}
          actionBlock={<Button label="Add Note" icon={Plus} />}
          searchProps={{
            value: searchTerm,
            onChange: e => setSearchTerm(e.target.value),
          }}
        />
        {SAMPLE_NOTES.length ? (
          <div className="w-full space-y-6">
            {SAMPLE_NOTES.map(note => (
              <Card key={note.id} note={note} />
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
      </Container>
    </>
  );
};

export default Notes;
