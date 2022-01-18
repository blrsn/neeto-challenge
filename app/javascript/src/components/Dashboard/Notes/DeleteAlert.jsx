import React, { useState } from "react";

import { Alert, Toastr } from "neetoui/v2";

const DeleteAlert = ({ onClose, selectedNoteId, setNotes }) => {
  const [deleting, setDeleting] = useState(false);

  const handleDelete = async () => {
    try {
      setDeleting(true);
      setNotes(notes => notes.filter(note => note.id !== selectedNoteId));
      Toastr.success("Note was deleted successfully");
      onClose();
    } catch (error) {
      logger.error(error);
    } finally {
      setDeleting(false);
    }
  };
  return (
    <Alert
      isOpen
      onSubmit={handleDelete}
      onClose={onClose}
      message="Are you sure you want to delete the note? This action cannot be
      undone."
      title="Delete Note"
      isSubmitting={deleting}
    />
  );
};

export default DeleteAlert;
