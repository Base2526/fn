import {
  UserListContainer,
  UserWrapper,
  EditButton,
  ButtonWrapper
} from "./PostList.styled";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../data";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { UserContext, PostContext } from "../../Store";
import Box from "@mui/material/Box";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory
} from "react-router-dom";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Typography from "@mui/material/Typography";

import Footer from "../home2/Footer";

const PostList = (props) => {
  let history = useHistory();
  // const [userData, setUserData] = useState(userRows);
  const [userData, setUserData] = useContext(PostContext);

  console.log("userData : ", userData);
  const [openDialogDelete, setOpenDialogDelete] = useState({
    isOpen: false,
    id: ""
  });

  const handleClickOpen = () => {
    // setOpen(true);

    setOpenDialogDelete({ ...openDialogDelete, isOpen: true });
  };

  const handleClose = () => {
    // setOpen(false);
    setOpenDialogDelete({ ...openDialogDelete, isOpen: false });
  };

  const handleDelete = (id) => {
    setUserData(userData.filter((user) => user.id !== id));
  };

  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 100
      // renderCell: (params) => {
      //   return (
      //     <UserWrapper>
      //       <img
      //         src={
      //           "https://cn.i.cdn.ti-platform.com/content/2167/we-baby-bears/showpage/fr/webabybears-icon.8db091e9.8db091e9.png"
      //         }
      //         alt=""
      //       />
      //       {params.row.id}
      //     </UserWrapper>
      //   );
      // }
    },
    {
      field: "title",
      headerName: "Title",
      width: 170
      // renderCell: (params) => {
      //   return (
      //     <UserWrapper>
      //       <img src={params.row.avatar} alt="" />
      //       {params.row.userName}
      //     </UserWrapper>
      //   );
      // }
    },
    { field: "nameSubname", headerName: "Name Subname", width: 200 },
    {
      field: "detail",
      headerName: "Detail",
      width: 250,
      renderCell: (params) => {
        return (
          <Box
            sx={{
              maxHeight: "inherit",
              width: "100%",
              whiteSpace: "initial",
              lineHeight: "16px"
            }}
          >
            <Typography
              variant="body1"
              gutterBottom
              dangerouslySetInnerHTML={{
                __html: params.row.detail
                // "<h1>H1</h1><h2>H2</h2><h3>H3</h3><h4>H4</h4><h5>H5</h5><h6>H6</h6><p>default body1</p>"
              }}
            >
              {/* {params.row.detail} */}
            </Typography>
          </Box>
        );
      }
    },
    {
      field: "isPublish",
      headerName: "Publish",
      width: 170
    },
    {
      field: "action",
      headerName: "Action",
      width: 140,
      renderCell: (params) => {
        return (
          <ButtonWrapper>
            <Link to={`/post/${params.row.id}/edit`}>
              <button className="editBtn">Edit</button>
            </Link>
            <DeleteOutline
              className="deleteBtn"
              onClick={() => {
                // handleDelete(params.row.id);
                // setOpen(true);
                setOpenDialogDelete({ isOpen: true, id: params.row.id });
              }}
            />
          </ButtonWrapper>
        );
      }
    }
  ];

  return (
    <UserListContainer>
      <Button
        variant="contained"
        onClick={() => {
          // newPost
          history.push("/post/new");
        }}
        // autoFocus
      >
        Add new post
      </Button>
      <DataGrid
        rows={userData}
        columns={columns}
        // rowsPerPageOptions={[5, 10, 20]}
        // pageSize={5}
        // rowsPerPageOptions={[5]}
        // checkboxSelection
        // disableSelectionOnClick
        rowHeight={80}
      />

      {/* <div style={{ height: 300, width: "100%" }}>
        <DataGrid
          rows={[
            { id: 1, col1: "Hello", col2: "World" },
            { id: 2, col1: "DataGridPro", col2: "is Awesome" },
            { id: 3, col1: "MUI", col2: "is Amazing" }
          ]}
          columns={[
            { field: "col1", headerName: "Column 1", width: 150 },
            { field: "col2", headerName: "Column 2", width: 150 }
          ]}
          rowsPerPageOptions={[5]}
        /> 
      </div> */}
      {openDialogDelete.isOpen && (
        <Dialog
          open={openDialogDelete.isOpen}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Delete</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Delete
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              variant="outlined"
              onClick={() => {
                handleDelete(openDialogDelete.id);

                setOpenDialogDelete({ isOpen: false, id: "" });
              }}
            >
              Delete
            </Button>
            <Button variant="contained" onClick={handleClose} autoFocus>
              Close
            </Button>
          </DialogActions>
        </Dialog>
      )}
      <Footer />
    </UserListContainer>
  );
};

export default PostList;
