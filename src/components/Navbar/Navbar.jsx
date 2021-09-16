import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import {useForm} from "react-hook-form";
import "./Navbar.css";
import Logo from "./Navbarcomponents/Logo.png";
import Profilepic from "./Navbarcomponents/Profile.png";
import Post from "./Navbarcomponents/Post.png";
import Logout from "./Navbarcomponents/Logout.png";
import {Link} from "react-router-dom";
import axios from "axios";

const PostDialog = ({open, onClose, user, post, setPost}) => {
    const handleClose = () => {
        onClose();
    };

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm();

    const onSubmit = async (data) => {
        await axios.post(`${process.env.REACT_APP_BACKEND}/post${user.token ? "?secret_token=" + user.token : ""}`, {
            city: user.city,
            author: user.username,
            content: data.content,
        });
        setPost(post + 1);
        handleClose();
    };

    console.log(errors);

    return (
        <Dialog className="DialogBox" onClose={handleClose} open={open}>
        <div className="Postbox">
            <DialogTitle>Create new post in {user.city}</DialogTitle>
            <form onSubmit={handleSubmit(onSubmit)}>
                <textarea className="DialogTextArea" {...register("content", {required: true})} />
                <input className="DialogBttn" type="submit" value="Add"/>
            </form>
            </div>
        </Dialog>
    );
};

const City = ({user, setUser}) => {
    return (
        <div >
            <select className="Slider" value={user.city} onChange={(selection) => {setUser({...user, city: selection.target.value})}}>
                <option value="Liverpool">Liverpool</option>
                <option value="Manchester">Manchester</option>
            </select>
        </div>
    )
};

export default function Navbar({user, setUser, post, setPost}) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className="Navbar">
            <div className="Logoleft">
                <Link className="Logo" to="/">
                    <img src={Logo} alt="logo" width="280" height="105" />
                </Link>
                
                <div className="city">
                    <City user={user} setUser={setUser} />
                </div>
                
            </div>
            <div className="profileflex">
                <Link className="profileflex" to="/profile">
                    <img src={Profilepic} alt="profile" width="45" height="55" />
                </Link>
            </div>
            <div className="postflex">
                <img src={Post} onClick={handleClickOpen} alt="post" width="45" height="55" />
                <PostDialog user={user} open={open} onClose={handleClose} post={post} setPost={setPost} />
            </div>
            <div className="logoutflex">
                <img
                    src={Logout}
                    alt="logout"
                    width="45"
                    height="53"
                    onClick={() => setUser(null)}
                />
            </div>
        </div>
    );
}
