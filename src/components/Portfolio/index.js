import React from "react";

function Project(props) {
    return (
        <div className="row container-fluid cards">
            {props.projects.map(item => (
                <li className="col card project-card">
                    <div className="card-body" key={item.id}>
                        <h2> {item.title}</h2>
                        <img className="image" src={item.picture}></img>
                        <button className="row btn">
                            <a className="github" rel="noopener noreferrer" target="_blank" href={item.repo}>View Github Repo</a>
                        </button>
                        <button className="row btn">
                            <a className="github" rel="noopener noreferrer" target="_blank" href={item.demo}>View Demo</a>
                        </button>
                    </div>
                </li>



            ))}

        </div>
    )
}


export default Project;