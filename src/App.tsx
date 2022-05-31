import MSlide from './components/MSlide/MSlide';
import './App.css';

function App() {
    return (
        <div className="App">
            <MSlide
                items={SLIDES}
                cycle={true}
                hideControls={true}
                automatic={true}
                interval={3000}
            />
        </div>
    );
}

export default App;

const SLIDES = [
    {
        id: 'slide1',
        text: 'Slide 1',
    },
    {
        id: 'slide2',
        text: 'Slide 2',
    },
    {
        id: 'slide3',
        text: 'Slide 3',
    },
];
