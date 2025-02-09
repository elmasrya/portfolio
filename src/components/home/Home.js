import career from "../../images/career.png";
import hello from "../../images/hello.png";
import hobbies from "../../images/hobbies.png";
import family from "../../images/family.png";
import'./Home.css';

function Home() {
    return (
        <div className="home-container">
            <div className="image-container career-container">
                <label className="image-label">Career</label>
                <img src={career} className="me-select career-img" alt="career" />
            </div>
            <div className="image-container hello-container">
                <label className="image-label hello-label">Hello</label>
                <img src={hello} className="me-select hello-img" alt="hello" />
            </div>
            <div className="image-container hobbies-container">
                <label className="image-label hobbies-label">Hobbies</label>
                <img src={hobbies} className="me-select hobbies-img" alt="hobbies" />
            </div>
            <div className="image-container family-container">
                <label className="image-label">Family</label>
                <img src={family} className="me-select family-img" alt="family" />
            </div>
        </div>
    )
}

export {Home};