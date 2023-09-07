import { useState } from "react";
import "./Profile.Style.css";
import { IProfile } from "./Profile.Type";

type Props = {
    OnBackButtonClick: () => void;
    onSubmitClickHandler: (data: IProfile) => void;
}

const AddProfile = (props: Props) => {

    const [name, setName] = useState("");
    const [dob, setDOB] = useState("");
    const [exp, setExp] = useState("");
    const [company, setCompany] = useState("");
    const { OnBackButtonClick, onSubmitClickHandler } = props;

    const OnNameChangeHandler = (e: any) => {
        setName(e.target.value);
    }

    const OnDOBChangeHandler = (e: any) => {
        setDOB(e.target.value);
    }

    const OnExpChangeHandler = (e: any) => {
        setExp(e.target.value);
    }

    const OnCompChangeHandler = (e: any) => {
        setCompany(e.target.value);
    }

    const onSubmitbtnClickHandler = (e: any) => {
        e.preventDefault();
        const data: IProfile = {
            id: new Date().toJSON().toString(),
            name: name,
            dateOfBirth: dob,
            experience: exp,
            company: company
        }
        onSubmitClickHandler(data)
    }

    return (
        <div className="form-container">
            <div>
                <h3>Add New Profile</h3>
            </div>
            <form onSubmit={onSubmitbtnClickHandler}>
                <div>
                    <label> Full Name : </label>
                    <input type="text" value={name} onChange={OnNameChangeHandler} />
                </div>
                <div>
                    <label>DateOfBirth : </label>
                    <input type="text" value={dob} onChange={OnDOBChangeHandler} />
                </div>
                <div>
                    <label> Experience : </label>
                    <input type="text" value={exp} onChange={OnExpChangeHandler} />
                </div>
                <div>
                    <label>Company : </label>
                    <input type="text" value={company} onChange={OnCompChangeHandler} />
                </div>
                <div>
                    <input type="button" value="Back" onClick={OnBackButtonClick} />
                    <input type="submit" value="Add Profile" />
                </div>
            </form>
        </div>
    );
}

export default AddProfile;