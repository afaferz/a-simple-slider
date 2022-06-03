import { MSlideContainer, MSlideItem } from './components/MSlide/MSlide';
import { generateRandomColor } from './helpers/RandomColor';
import './App.css';

function App() {
    return (
        <div className="App">
            <MSlideContainer
                cycle={true}
                hideControl={true}
                automatic={true}
                interval={1500}
            >
                {SLIDES.map((slide, index) => (
                    <MSlideItem id={slide.id}>
                        <div style={{ ...itemStyle() }}>{index + 1}</div>
                    </MSlideItem>
                ))}
            </MSlideContainer>
        </div>
    );
}

export default App;

const itemStyle = () => ({
    backgroundColor: generateRandomColor(),
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
});

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
