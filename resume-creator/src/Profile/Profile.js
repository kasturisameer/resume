import react from 'react';
import pic from '../assets/images/kohli.jpg';
export function Profile() {
    return (
        <>
            <div>
                <h2>Profile</h2>
                <p>I'm a Full Stack Developer</p>
                <hr />
            </div>
            <div className="col-container">
                <div className="inner-col">
                    <h3>About me</h3>
                </div>
                <div className="inner-col">
                    <div className="pic_self_border">
                        <img src={pic} width="200px" height="200px" className="pic_self"/>
                    </div>
                </div>
                <div className="inner-col">
                    <h3>Details</h3>
                </div>
            </div>
        </>
    )
}