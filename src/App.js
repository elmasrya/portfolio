import hello from './images/hello.png';
import family from './images/family.png';
import hobbies from './images/hobbies.png';
import career from './images/career.png';
import './App.css';

function App() {
  return (
    <div className="App">
        <div className="home-container">
            <div className="avatar-container">
                <div className="image-container career-container">
                    <span className="image-label">Career</span>
                    <img src={career} className="me-select career-img" alt="career" />
                </div>
                <div className="image-container hello-container">
                    <span className="image-label hello-label">Hello</span>
                    <img src={hello} className="me-select hello-img" alt="hello" />
                </div>
                <div className="image-container hobbies-container">
                    <span className="image-label hobbies-label">Hobbies</span>
                    <img src={hobbies} className="me-select hobbies-img" alt="hobbies" />
                </div>
                <div className="image-container family-container">
                    <span className="image-label">Family</span>
                    <img src={family} className="me-select family-img" alt="family" />
                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
