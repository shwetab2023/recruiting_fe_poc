import { useState } from "react";
import "./Home.style.css";
import { IProfile, PageEnum, dummyProfileList } from "./Profile.Type";
import ProfileList from "./ProfileList";
import AddProfile from "./AddProfile";

const Home = () => {

    const [profileList, setProfileList] = useState(dummyProfileList as IProfile[]);

    const [shownPage, setShownPage] = useState(PageEnum.list);

    const onAddProfileClickHandler = () => {
        setShownPage(PageEnum.add);
    }

    const showListPage = () => {
        setShownPage(PageEnum.list);
    }

    const addProfile = (data: IProfile) => {

        setProfileList([...profileList, data])
    };

    return (
        <>
            <article className="article-header">
                <header>
                    <h1>
                        Recruiting User Profile
                    </h1>
                </header>
            </article>

            <section className="section-content">
                {shownPage === PageEnum.list && (
                    <>
                        <input type="button" value="Add New Profile" onClick={onAddProfileClickHandler} />
                        <ProfileList list={profileList} />
                    </>
                )}

                {shownPage == PageEnum.add && <AddProfile OnBackButtonClick={showListPage} onSubmitClickHandler={addProfile} />

                }
            </section>
        </>
    );
}

export default Home;