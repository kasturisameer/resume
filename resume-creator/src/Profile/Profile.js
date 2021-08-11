import react from 'react';
import pic from '../assets/images/self.jpg';
export function Profile() {
    return (
        <>
            <div>
                <h2>Profile</h2>
                <p>I'm a Full Stack Developer</p>
                <hr />
            </div>
            <div className="flex-column-container">
                <div className="profile_aboutme">
                    <h3>About me</h3>
                    <p>
                        Overall 4+ years of experience working as a full stack developer.
                        Mainly focused on Front end development with Javascript frameworks React, Angular
                        and backend development using .Net Framework.
                        Worked in other cutting edge technologies like Azure Cloud, Xamarin (Andriod, IOS), UWP, BOT, Docker,
                        SQL, COSMOS, DevOps
                    </p>
                </div>
                <div className="profile_picture">
                    <div className="pic_self_border">
                        <img src={pic} width="180px" height="180px" className="pic_self"/>
                    </div>
                </div>
                <div className="profile_details">
                    <h3>Details</h3>
                    <b>Name</b>
                    <p>Kasturi Sameer</p>
                    <b>Age</b>
                    <p>26</p>
                    <b>Location</b>
                    <p>Visakhapatnam</p>
                </div>
            </div>
        </>
    )
}