import React, {useState} from "react";
import "./about.css";
import EditButton from "./editbutton.png";
import Xbt from "./X.png";
import ok from "./OK.png";
import {useForm} from "react-hook-form";
import axios from "axios";

const Aboutmebox = ({ user, setUser }) => {
    const [editMode, setEditMode] = useState(false);

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm();

    const changeEditMode = () => {
        setEditMode(!editMode);
    };

    const onSubmit = async (data) => {

        const res = await axios.put(`${process.env.REACT_APP_BACKEND}/user${user.token ? "?secret_token=" + user.token : ""}`, {
            "_id": user._id,
            "property": "about",
            "update": data.content,
        });

        if (res.data.response === "User updated") {
            user.about = data.content;
        }
  
        changeEditMode();
    };

    console.log(errors);

    if (editMode) {
        return (
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className="input" type="text" placeholder={user.about} {...register("content", {})} />
                    <div className="xbutton">
                        <img
                            src={Xbt}
                            alt="cancel"
                            width="25px"
                            height="35px"
                            onClick={changeEditMode}
                        />
                    </div>
                    <div className="okbtn">
                        <input
                            type="image"    
                            src={ok}
                            alt="submit"
                            width="28px"
                            height="32px"
                        />
                    </div>
                </form>
            </div>
        );
    } else {
        return (
            <div>
                <div className="editbutton">
                    <img
                        src={EditButton}
                        alt="edit"
                        width="33px"
                        height="38px"
                        onClick={changeEditMode}
                    />
                </div>
                <div className="Value">{user.about}</div>
            </div>
        );
    }
};

export default Aboutmebox;