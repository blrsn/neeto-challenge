import React, { useState } from "react";

import { Formik, Form } from "formik";
import { Button, Pane } from "neetoui/v2";
import { Input, Textarea, Select } from "neetoui/v2/formik";

import formValidationSchemas from "constants/formValidationSchemas";

import { CONTACT_OPTIONS, TAG_OPTIONS } from "../constants";

export default function NoteForm({ onClose, handleSubmit, note, isEdit }) {
  const [submitted, setSubmitted] = useState(false);

  return (
    <Formik
      initialValues={note}
      onSubmit={handleSubmit}
      validateOnBlur={submitted}
      validateOnChange={submitted}
      validationSchema={formValidationSchemas.notesForm}
    >
      {({ isSubmitting, handleSubmit }) => (
        <Form className="w-full">
          <Pane.Body className="space-y-6">
            <Input
              label="Title"
              name="title"
              className="flex-grow-0 w-full"
              required
            />
            <Textarea
              label="Description"
              name="description"
              className="flex-grow-0 w-full"
              rows={8}
              placeholder="Enter note description"
              required
            />
            <Select
              label="Assigned Contact"
              name="assignedContact"
              placeholder="Select Contact"
              options={CONTACT_OPTIONS}
              required
              className="flex-grow-0 w-full"
            />
            <Select
              label="Tags"
              name="tag"
              placeholder="Select Role"
              options={TAG_OPTIONS}
              required
              className="flex-grow-0 w-full"
            />
          </Pane.Body>
          <Pane.Footer>
            <Button
              type="submit"
              label={isEdit ? "Update" : "Save Changes"}
              size="large"
              style="primary"
              className="mr-3"
              disabled={isSubmitting}
              loading={isSubmitting}
              onClick={e => {
                e.preventDefault();
                setSubmitted(true);
                handleSubmit();
              }}
            />
            <Button
              onClick={onClose}
              label="Cancel"
              size="large"
              style="text"
            />
          </Pane.Footer>
        </Form>
      )}
    </Formik>
  );
}
