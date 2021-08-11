import react from 'react';

export function Abilities() {
    const techSkills = [
        { name: 'HTML', rating: 5 }, 
        { name: 'React', rating: 5 }, 
        { name: 'Angular', rating: 4}, 
        { name: 'Javascript', rating: 4 },
        { name: 'CSS', rating: 4 }, 
        { name: 'C#', rating: 3 },
        { name: '.Net', rating: 3 },
        { name: 'Xamarin', rating: 3 },
        { name: 'API', rating: 3 },
        { name: 'Azure Cloud', rating: 3 },
        { name: 'UWP', rating: 3 },
        { name: 'SQL', rating: 3 },
        { name: 'COSMOS', rating: 3 },
        { name: 'JQuery', rating: 3 },
        { name: 'GIT', rating: 3 },
        { name: 'Microsoft BOT', rating: 3 },
        { name: 'OOP', rating: 3 },
        { name: 'C Programming', rating: 3 },
        { name: 'DS & Algo', rating: 3 },
        { name: 'Java', rating: 3 },
        { name: 'Python', rating: 3 },
        { name: 'MVC', rating: 3 },
        { name: 'MVVM', rating: 3 },
        { name: 'Agile', rating: 3 },
        { name: 'Docker', rating: 2 },
        { name: 'Microservices', rating: 2 },
    ];

    const languages = [
        { name: 'English', rating: 4 },
        { name: 'Telugu', rating: 5 },
    ];
    const renderRating = (rating) => {
        const total = 5;
        return (
            <div className="flex">
                {
                    [...Array(total)].map((_, count) => <span>
                        <div>{count+1 <= rating && <i className="fa fa-star default-color" aria-hidden="true">&nbsp;</i> }</div>
                        <div>{count+1 > rating && <i className="fa fa-star-o default-color" aria-hidden="true">&nbsp;</i> }</div>
                    </span>
                )}
            </div>
        )
    }
    return (
        <>
            <h2>Abilities</h2>
            <hr />
            <h3 className="align-left">Skills</h3>
            <div className="flex-column-container row">
                <div className="col-md-6 align-left">
                    <ul className="no-bullets">
                        {techSkills.slice(0, (techSkills.length/2 + 1)).map(skill => {
                            return (
                                <li className="ability-skill">
                                    <span className="ability-title align-left">{skill.name}</span>
                                    <span className="ability-score">{renderRating(skill.rating)}</span>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className="col-md-6 align-left">
                    <ul className="no-bullets ">
                        {techSkills.slice((techSkills.length/2)+1, techSkills.length).map(skill => {
                            return (
                                <li className="ability-skill ">
                                    <span className="ability-title ">{skill.name}</span>
                                    <span className="ability-score">{renderRating(skill.rating)}</span>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
            <br />
            <h3 className="align-left">Languages</h3>
            <div className="row">
                <div className="col-md-6 align-left">
                    <ul className="no-bullets">
                        {languages.map(skill => {
                            return (
                                <li className="ability-skill">
                                    <span className="ability-title align-left">{skill.name}</span>
                                    <span className="ability-score">{renderRating(skill.rating)}</span>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </>
    )
}