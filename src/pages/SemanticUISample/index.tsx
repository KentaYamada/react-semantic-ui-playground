import { useState, FunctionComponent } from "react";
import { Button, Modal } from "semantic-ui-react";

export const SemanticUISamplePage: FunctionComponent = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}>
        <Modal.Header>Modal Sample</Modal.Header>
        <Modal.Content>
          <p>This is modal</p>
        </Modal.Content>
        <Modal.Actions>
          <Button basic color="black" onClick={() => setOpen(false)}>
            Close
          </Button>
          <Button basic color="blue" onClick={() => setOpen(false)}>
            Save
          </Button>
        </Modal.Actions>
      </Modal>
      <Button color="red" onClick={() => setOpen(true)}>
        Click Here
      </Button>
    </div>
  );
};
