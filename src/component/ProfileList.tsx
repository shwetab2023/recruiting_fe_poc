import { IProfile } from "./Profile.Type";
import "./ProfileList.style.css";


type Props = {
    list: IProfile[]
}

const ProfileList = (props: Props) => {

    const { list } = props;

    return (<div>
        <table>
            <tr>
                <th>Name</th>
                <th>DOB</th>
                <th>Experience</th>
                <th>Company</th>
                <th>Actions</th>
            </tr>
            {list.map((profile) => {
                console.log(profile)
                return (
                    <tr key={profile.id}>
                        <td>{profile.name}</td>
                        <td>{profile.dateOfBirth}</td>
                        <td>{profile.experience}</td>
                        <td>{profile.company}</td>
                        <td>
                            <div>
                                <input type="button" value="View"/>
                                <input type="button" value="Edit"/>
                                <input type="button" value="Delete"/>
                            </div>
                        </td>
                    </tr>
                );
            })}

        </table>
    </div>
    );
};

export default ProfileList;