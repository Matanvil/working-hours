import { useState } from "react";
import Fab from "@mui/material/Fab";
import EditIcon from "@mui/icons-material/Edit";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import DeleteIcon from "@mui/icons-material/Delete";
import "../style/list.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ListItem = (props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const editClickHandler = () => {
    console.log("clicked");
  };
  const deleteClickHandler = () => {
  };

  return (
    <div>
      <li className="list-item">
        <div className="item-time">
          <h3>Start Time: {props.startTime}</h3>
          <h3>End Time: {props.endTime}</h3>
          <h3>Total Time: {props.totalTime}</h3>
        </div>
        <div className="item-comments">
          <h3> Comments: {props.comments}</h3>
        </div>
        <div className="item-actions">
          <Fab
            color="primary"
            aria-label="edit"
            size="small"
            onClick={editClickHandler}
          >
            <EditIcon />
          </Fab>
          <Fab
            color="secondary"
            aria-label="delete"
            size="small"
            onClick={handleOpen}
          >
            <DeleteIcon />
          </Fab>
        </div>
      </li>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default ListItem;
