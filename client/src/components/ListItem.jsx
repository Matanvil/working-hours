import { useState } from "react";
import Fab from "@mui/material/Fab";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import DeleteIcon from "@mui/icons-material/Delete";
import deleteListItem from '../utils/deleteListItem'
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
  const {startTime, endTime, totalTime, comments, id} = props;
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const editClickHandler = () => {
    console.log("clicked");
  };
  const deleteClickHandler = async () => {
    const res = await deleteListItem(id)
    props.update(res)
    console.log(res)
    handleClose()
  };

  return (
    <div>
      <li className="list-item">
        <div className="item-time">
          <h3>Start Time: {startTime}</h3>
          <h3>End Time: {endTime}</h3>
          <h3>Total Time: {totalTime}</h3>
        </div>
        <div className="item-comments">
          <h3> Comments: {comments}</h3>
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
              Are You Sure?
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              This Action Will Delete This Item Completely!.
            </Typography>
            <div className="modal-actions">
              <Button variant="outlined" startIcon={<DeleteIcon />} onClick={deleteClickHandler}>
                Delete
              </Button>
              <Button variant="outlined" onClick={handleClose}>Cancel</Button>
            </div>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default ListItem;
