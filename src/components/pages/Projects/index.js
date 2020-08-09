import React, { Component } from "react";
import Project from "../../Project";
import burger from "./burger.png";
import cocktail from "./cocktail.jpg";
import lily from "./lily.jpg";
import empDir from "./employee-summary.jpg";
import empManage from "./employee-tracker.jpg";
import note from "./notetaker.jpg";
import fitness from "./fitness-tracker.jpg";

const portfolioData = [
    {
        id: 1,
        title: "Cocktail Finder",
        picture: cocktail,
        repo: "https://github.com/emcarlisle/Drinking-At-Home",
        demo: "https://emcarlisle.github.io/Drinking-At-Home/"
    },
    {
        id: 2,
        title: "Burger App",
        picture: burger,
        repo: "https://github.com/emcarlisle/burger",
        demo: "https://burgerapphw11.herokuapp.com/"
    },
    {
        id: 3,
        title: "Employee Directory",
        picture: empDir,
        repo: "https://github.com/emcarlisle/react-employee-dir",
        demo: "https://react-employe-dir.herokuapp.com/"
    },
    {
        id: 4,
        title: "Note Taker",
        picture: note,
        repo: "https://github.com/emcarlisle/Note-Taker",
        demo: "https://note-takerhw11.herokuapp.com"
    },
    {
        id: 5,
        title: "Fitness Tracker",
        picture: fitness,
        repo: "https://github.com/emcarlisle/fitness-tracker",
        demo: "https://fitnesstracker-hw17.herokuapp.com/"
    },
    {
        id: 6,
        title: "Employee Management System",
        picture: empManage,
        repo: "https://github.com/emcarlisle/Employee-Tracker",
        demo: "https://drive.google.com/file/d/1iy_bJ7BLYjP3238-98rdhiFvbIZcA4lY/view?usp=sharing"
    }
]
class Portfolio extends Component {
    render() {
        return (
            <main>
                <section className="container-fluid-portfolio" id="portfolio-pg">
                    <section id="portfolio-section" style={{ backgroundImage: `url(${lily})` }} className="portfolio-pg">
                        <h1 className="header">Take a look at some of my projects!</h1>
                        <div className="portfolio-projects">
                            <Project projects={portfolioData} />
                        </div>


                    </section>
                </section>
            </main>

        );


    }
}

export default Portfolio;
