import React, { useState, useEffect, withStyles } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
// import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import CommentIcon from "@mui/icons-material/Comment";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { FacebookShareButton, TwitterShareButton } from "react-share";
import { FacebookIcon, TwitterIcon } from "react-share";
import { useHistory } from "react-router-dom";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import Link from "@mui/material/Link";
import _ from "lodash";

import PanelComment from "./PanelComment";
import PopupSnackbar from "./PopupSnackbar";
import Footer from "./Footer";
import SearchBar from "./SearchBar";
import Pagination from "./Pagination";

import Detail from "./Detail";

import DialogLogin from "./DialogLogin";

import { getList } from "../../components/provider/DataProvider";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const theme = createTheme();

const images = [
  "//placekitten.com/1500/500",
  "//placekitten.com/4000/3000",
  "//placekitten.com/800/1200",
  "//placekitten.com/1500/1500"
];

const Home = (props) => {
  const navigate = useHistory();
  const [keywordSearch, setKeywordSearch] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const [dialogLoginOpen, setDialogLoginOpen] = useState(false);

  const [lightbox, setLightbox] = useState({
    isOpen: false,
    photoIndex: 0
  });

  const [panelComment, setPanelComment] = useState({
    isOpen: false,
    commentId: 1234
  });

  const [anchorElSetting, setAnchorElSetting] = useState(null);
  const [anchorElShare, setAnchorElShare] = useState(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  // DataProvider
  useEffect(async () => {
    console.log("useEffect :", await getList());
  }, []);

  const handleAnchorElSettingOpen = (index, event) => {
    setAnchorElSetting({ [index]: event.currentTarget });
  };

  const handleAnchorElSettingClose = () => {
    setAnchorElSetting(null);
  };

  const handleAnchorElShareOpen = (index, event) => {
    setAnchorElShare({ [index]: event.currentTarget });
  };

  const handleAnchorElShareClose = () => {
    setAnchorElShare(null);
  };

  const snackbarClick = () => {
    setSnackbarOpen(true);
  };

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    // <ThemeProvider theme={theme}>
    //   <CssBaseline />
    <div>
      <div>
        <SearchBar
          keyword={keywordSearch}
          onChange={(data, topic) => {
            console.log("SearchBar onChange :", data, topic);

            setKeywordSearch(data);
          }}
          onKeyDown={(ev) => {
            // key enter
            if (ev.keyCode == 13) {
              console.log("onKeyDown value", ev.target.value);
              // put the login here
            }
          }}
        />
        <Container sx={{ py: 2 }} maxWidth="xl">
          {/* End hero unit */}
          <Grid container spacing={1} alignItems="center">
            {_.map(cards, (value, key) => (
              <Grid item key={value} xs={6} sm={4} md={3}>
                <Card>
                  {/* <CardHeader
                    // avatar={
                    //   <Avatar
                    //     sx={{ bgcolor: red[500] }}
                    //     aria-label="recipe"
                    //     src="/static/images/avatar/1.jpg"
                    //   />
                    // }
                    action={
                      <IconButton aria-label="settings">
                        <MoreVertIcon
                          onClick={(e) => handleAnchorElSettingOpen(key, e)}
                        />

                        <Menu
                          anchorEl={anchorElSetting && anchorElSetting[key]}
                          keepMounted
                          open={
                            anchorElSetting && Boolean(anchorElSetting[key])
                          }
                          onClose={handleAnchorElSettingClose}
                          getContentAnchorEl={null}
                          anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "center"
                          }}
                          transformOrigin={{
                            vertical: "top",
                            horizontal: "center"
                          }}
                          MenuListProps={{
                            "aria-labelledby": "lock-button",
                            role: "listbox"
                          }}
                        >
                          <MenuItem onClick={handleAnchorElSettingClose}>
                            Report
                          </MenuItem>{" "}
                        </Menu>
                      </IconButton>
                    }
                    // title="Shrimp and Chorizo Paella"
                    // subheader="September 14, 2016"
                    onClick={() => {
                      console.log("CardHeader");
                    }}
                  /> */}
                  {/* <CardActionArea> */}
                  {/* <CardActionArea> */}
                  <CardMedia
                    component="img"
                    height="194"
                    image="https://png.pngtree.com/element_our/20190531/ourlarge/pngtree-cartoon-cute-hamster-png-transparent-bottom-image_1305367.jpg"
                    alt="Paella dish"
                    onClick={() => {
                      console.log("vnnm : ", props);

                      props.handleText();

                      setLightbox({ isOpen: true, photoIndex: 0 });
                    }}
                  />
                  {/* <CardActionArea> */}
                  <CardContent
                    onClick={() => {
                      navigate.push("detail");
                    }}
                  >
                    <Typography
                      variant="subtitle2"
                      gutterBottom
                      component="div"
                    >
                      Title
                    </Typography>
                    <Typography>
                      This impressive paella is a perfect party
                    </Typography>
                  </CardContent>
                  <CardContent
                    onClick={() => {
                      navigate.push("detail");
                    }}
                  >
                    <Typography
                      variant="subtitle2"
                      gutterBottom
                      component="div"
                    >
                      Detail
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      This impressive paella is a perfect party dish and a fun
                      meal to cook together with your guests. Add 1 cup of
                      frozen peas along with the mussels, if you like.
                    </Typography>
                  </CardContent>

                  <CardContent>
                    <Typography
                      variant="subtitle2"
                      gutterBottom
                      component="div"
                      display="inline"
                    >
                      Date :
                    </Typography>
                    <Typography display="inline">September 14, 2016</Typography>
                  </CardContent>
                  <CardContent>
                    <Typography
                      variant="subtitle2"
                      gutterBottom
                      component="div"
                      display="inline"
                    >
                      Name :
                    </Typography>
                    <Link href="#" underline="hover">
                      {"Somkid Simajarn"}
                    </Link>
                  </CardContent>
                  <CardContent>
                    <Typography
                      variant="subtitle2"
                      gutterBottom
                      component="div"
                      display="inline"
                    >
                      Tel :
                    </Typography>
                    <Typography display="inline">0988264820</Typography>
                  </CardContent>
                  {/* </CardActionArea> */}

                  {/* <CardContent
                    onClick={(event) => {
                      navigate("detail");
                    }}
                  >
                    <Typography variant="body2" color="text.secondary">
                      This impressive paella is a perfect party dish and a fun
                      meal to cook together with your guests. Add 1 cup of
                      frozen peas along with the mussels, if you like.
                    </Typography>
                  </CardContent> */}
                  {/* </CardActionArea> */}

                  <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                      <FavoriteIcon /*onClick={snackbarClick}*/
                        onClick={() => {
                          setDialogLoginOpen(true);
                        }}
                      />
                    </IconButton>
                    <IconButton aria-label="share">
                      <ShareIcon
                        onClick={(e) => {
                          handleAnchorElShareOpen(key, e);
                        }}
                      />
                      <Menu
                        anchorEl={anchorElShare && anchorElShare[key]}
                        keepMounted
                        open={anchorElShare && Boolean(anchorElShare[key])}
                        onClose={handleAnchorElShareClose}
                        getContentAnchorEl={null}
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "center"
                        }}
                        transformOrigin={{
                          vertical: "top",
                          horizontal: "center"
                        }}
                        MenuListProps={{
                          "aria-labelledby": "lock-button",
                          role: "listbox"
                        }}
                      >
                        <MenuItem onClick={handleAnchorElShareClose}>
                          <FacebookShareButton
                            url={"https://peing.net/ja/"}
                            quote={"quotequotequotequote"}
                            hashtag={"#hashtag"}
                            description={"aiueo"}
                            className="Demo__some-network__share-button"
                          >
                            <FacebookIcon size={32} round /> Facebook
                          </FacebookShareButton>
                        </MenuItem>{" "}
                        <MenuItem onClick={handleAnchorElShareClose}>
                          <TwitterShareButton
                            title={"test"}
                            url={"https://peing.net/ja/"}
                            hashtags={["hashtag1", "hashtag2"]}
                          >
                            <TwitterIcon size={32} round />
                            Twitter
                          </TwitterShareButton>
                        </MenuItem>
                      </Menu>
                    </IconButton>

                    <IconButton aria-label="comment">
                      <CommentIcon
                        onClick={() => {
                          console.log("CommentIcon");
                          setPanelComment({ isOpen: true, commentId: 3456 });

                          // setDrawerOpen(true)
                        }}
                      />
                    </IconButton>

                    <IconButton aria-label="more">
                      <MoreVertIcon
                        onClick={(e) => {
                          console.log("MoreVertIcon");
                          handleAnchorElSettingOpen(key, e);
                        }}
                      />
                      <Menu
                        anchorEl={anchorElSetting && anchorElSetting[key]}
                        keepMounted
                        open={anchorElSetting && Boolean(anchorElSetting[key])}
                        onClose={handleAnchorElSettingClose}
                        getContentAnchorEl={null}
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "center"
                        }}
                        transformOrigin={{
                          vertical: "top",
                          horizontal: "center"
                        }}
                        MenuListProps={{
                          "aria-labelledby": "lock-button",
                          role: "listbox"
                        }}
                      >
                        <MenuItem onClick={handleAnchorElSettingClose}>
                          Report
                        </MenuItem>{" "}
                      </Menu>
                    </IconButton>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
        <Container sx={{ py: 2 }} maxWidth="xl">
          <Pagination
            page={page}
            onPageChange={(event, newPage) => {
              setPage(newPage);

              navigate.push({
                pathname: "/",
                search: "?sort=date&order=newest"
              });
            }}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={(event) => {
              setRowsPerPage(parseInt(event.target.value, 10));
              setPage(0);

              navigate.push({
                pathname: "/",
                search: "?sort=date&order=newest"
              });
            }}
          />
        </Container>
        <Footer />
      </div>

      {snackbarOpen && (
        <PopupSnackbar
          isOpen={snackbarOpen}
          onClose={() => {
            setSnackbarOpen(false);
          }}
        />
      )}

      {panelComment.isOpen && (
        <PanelComment
          commentId={panelComment.commentId}
          isOpen={panelComment.isOpen}
          onRequestClose={() => {
            // setPaneRightOpen(false);
            let newPanelComment = { ...panelComment };
            newPanelComment = { ...newPanelComment, isOpen: false };
            setPanelComment(newPanelComment);
          }}
        />
      )}

      {lightbox.isOpen && (
        <Lightbox
          mainSrc={images[lightbox.photoIndex]}
          nextSrc={images[(lightbox.photoIndex + 1) % images.length]}
          prevSrc={
            images[(lightbox.photoIndex + images.length - 1) % images.length]
          }
          onCloseRequest={() => {
            setLightbox({ ...lightbox, isOpen: false });
          }}
          onMovePrevRequest={() => {
            setLightbox({
              ...lightbox,
              photoIndex:
                (lightbox.photoIndex + images.length - 1) % images.length
            });
          }}
          onMoveNextRequest={() => {
            setLightbox({
              ...lightbox,
              photoIndex: (lightbox.photoIndex + 1) % images.length
            });
          }}
        />
      )}

      {dialogLoginOpen && (
        <DialogLogin
          open={dialogLoginOpen}
          onClose={() => {
            setDialogLoginOpen(false);
          }}
        />
      )}
    </div>
    // </ThemeProvider>
  );
};

export default Home;
