import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import {useForm} from "react-hook-form";
import "./Navbar.css";
import Logo from "./Navbarcomponents/Logo.png";
import Profilepic from "./Navbarcomponents/Profile.png";
import Post from "./Navbarcomponents/Post.png";
import Logout from "./Navbarcomponents/Logout.png";
import {useContext} from "react";
import {AuthContext} from "../../authContext/AuthContext";
import {logout} from "../../authContext/AuthActions";
import {Link} from "react-router-dom";

const PostDialog = ({open, onClose}) => {
    const handleClose = () => {
        onClose();
    };

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm();
    const onSubmit = (data) => console.log(data);
    console.log(errors);

    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle>Create new post</DialogTitle>
            <form onSubmit={handleSubmit(onSubmit)}>
                <textarea {...register("content", {required: true})} />
                <input type="submit" />
            </form>
        </Dialog>
    );
};

const City = (props) => {
    return <p> I am dynamic and will display {props.city}</p>;
};

export default function Navbar() {
    const {dispatch} = useContext(AuthContext);

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
                <img src={Logo} alt="a logo" width="280" height="105" />
                <div className="city">
                    <City city="Manchester" />
                </div>
            </div>

            <div className="Logoright">
                <div className="profileflex">
                    <Link className="profileflex" to="/profile">
                        <img src={Profilepic} alt="profile" width="45" height="55" />
                    </Link>
                </div>
                <div className="postflex">
                    <img src={Post} onClick={handleClickOpen} alt="post" width="45" height="55" />
                    <PostDialog open={open} onClose={handleClose} />
                </div>
                <div className="logoutflex">
                    <img
                        src={Logout}
                        alt="logout"
                        width="45"
                        height="53"
                        onClick={() => dispatch(logout())}
                    />
                </div>
            </div>
        </div>
    );
}
