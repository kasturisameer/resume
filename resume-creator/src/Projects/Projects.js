import react from 'react';
import msft from '../assets/images/microsoft.png'
export function MyProjects() {
    const projects = [{
        name: 'Siemens Gamesa - Track & Trace',
        role: 'React developer',
        description: "A web application for Siemens Gamesa, where users inside the plant can track the equipments using map dashboard. I was excited to implement functionlities like OpenStreet maps, Clustering, Reporting, Hierarical tree Hallway details.",
        period: '',
        links: [{
            shortdesc: 'Related Information',
            url: 'https://customers.microsoft.com/en-us/story/821207-siemens-gamesa-renewable-energy-mcs-story'
        }]
    },
    {
        name: 'Komatsu - Serial Number Management',
        role: '.Net, Angular developer',
        description: 'Developed a global web application which displays information of all the construction vehicles assigned to users. There are different user roles with complex data filter functionlities. Used Angular, TYpescript for frontend and C# for backend, Azure',
        period: ''
    },
    {
        name: 'Toyota - Material Handling',
        role: 'Full Stack .Net Developer',
        description: 'An IOT solution for toyota where users track all the vehicles and materials used inside the toyota warehouses. Used React, redux, .Net, Power BI, Kendo-ui, COSMOS, Azure',
        links: [{
            shortdesc: 'Related Information',
            url: 'https://customers.microsoft.com/en-us/story/809931-tmhe'
        }]
    },
    {
        name: 'Grand Egyptian Museum',
        role: 'Xamarin Developer',
        links: [{
            shortdesc: 'Related Information',
            url: 'http://gem.gov.eg/index.htm'
        }],
        description: 'Ticketing app for the new Grand Egyptian Museum which is yet to be open in Egypt. App is used for booking ticket, offline viewing, Scan an artifact, LTR and RTL, Azure Map View. Used Xamarin and .Net'
    },
    {
        name: 'Toyota - Fork lift my fleet',
        role: 'Universal Windows Platform Developer',
        links: [{
            shortdesc: 'Related Information',
            url: 'https://toyota-forklifts.eu/solutions/i_site-fleet-management/i_site-my-fleet/'
        }],
        description: 'A Windows application for Toyota which is used to order spare parts, track maintainance request, defect tracking, detaied view for parts an vehicles. Used UWP with .Net using MVVM pattern'
    },
    {
        name: 'Publicis Marcel BOT',
        role: 'Microsoft BOT Developer',
        links: [{
            shortdesc: 'Marcel App',
            url: 'https://apps.apple.com/us/app/publicis-marcel/id1399650746'
        },
        {
            shortdesc: 'Marcel platform Video',
            url: 'https://www.youtube.com/watch?v=krHVG89deXY'
        }],
        description: 'It was one of the Most prestigious project for Publicis, Combined with Microsoft. Marcel is a platform designed to help employees of Publicis Groupe learn more, share more, and create more than ever before.'
    },
    {
        name: 'Law school Administration Exam Portal',
        role: 'React Developer',
        description: 'Examination portal for law school entrance. Developed features like Question paging, Test result, Screen reader accessbility for persons with disability',
        links: [{
            shortdesc: 'Related Information',
            url: 'https://www.lsac.org/'
        }],
    }]

    const renderprojects = () => {
        return(
            projects.map((project, index) => {
            return (
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingOne">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#project${index}`} aria-expanded="false" aria-controls="flush-collapseOne">
                        <div className="row">
                            <div className="col-sm-12"><b>{project.name}</b></div>
                            <div className="col-sm-12">{project.role}</div>
                        </div>
                    </button>
                    </h2>
                    <div id={`project${index}`} class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">
                        <p>{project.description}</p>
                        {
                            project.links && project.links.map(link => {
                                return (
                                    <div className="row">
                                        <a href={link.url}>{link.shortdesc}</a>
                                        <br />
                                    </div>
                                )
                            })
                        }
                        
                    </div>
                    </div>
                </div>
                )
            })
            
        )
    }
    return (
        <>
            <h2>Experience</h2>
            <div className="align-left">
                <hr/>
                <h3>Career</h3>
                <div className="flex-column-container">
                    <div className="education_center">
                        <div><img src={msft} style={{marginLeft: '-12px'}} height="50px" /> </div>
                        <div><b>Azure Application Developer</b></div>
                        <div><i className="fa fa-map-marker icon-color-default" aria-hidden="true"></i> <span className="default-color">Hyderabad, india</span></div>
                    </div>
                </div>
                <div class="accordion accordion-flush" id="accordionFlushExample">
                    {renderprojects()} 
                </div>
            </div>
        </>
    )
}