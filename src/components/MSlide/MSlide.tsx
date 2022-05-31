import React from 'react';
import styles from './MSlide.module.css';
import { generateRandomColor } from '../../helpers/RandomColor';

interface ISlide {
    id: string;
    text: string;
}

interface MSlideProps {
    items: ISlide[];
    randomColor?: boolean;
    cycle?: boolean;
    automatic?: boolean;
    hideControls?: boolean;
    interval?: number;
}

const MSlide = ({
    items,
    randomColor = true,
    cycle = true,
    hideControls = false,
    automatic = false,
    interval = 1000,
}: MSlideProps) => {
    const [active, setActive] = React.useState<number>(0);
    const [position, setPosition] = React.useState<number>(0);

    const [randomSlideColor, setRandomSlideColor] = React.useState<string[]>(
        []
    );

    const contentRef = React.useRef<HTMLDivElement>(
        document.createElement('div')
    );

    React.useEffect(() => {
        const { width } = contentRef.current.getBoundingClientRect();
        const color: string[] = [];
        items.forEach(() => color.push(generateRandomColor()));
        setRandomSlideColor(color);
        setPosition(-(width * active));
    }, [active]);

    React.useEffect(() => {
        let automaticId: ReturnType<typeof setInterval>;
        if (automatic) {
            automaticId = setInterval(() => {
                nextSlide();
            }, interval);
        }
        return () => clearInterval(automaticId);
    }, [active]);

    function previousSlide() {
        if (cycle) {
            if (active > 0) setActive(active - 1);
            else setActive(items.length - 1);
            return;
        }

        if (active > 0) setActive(active - 1);
    }
    function nextSlide() {
        if (cycle) {
            if (active < items.length - 1) return setActive(active + 1);
            else setActive(0);
            return;
        }
        if (active < items.length - 1) return setActive(active + 1);
    }

    return (
        <section className={styles.container}>
            <div
                ref={contentRef}
                className={styles.content}
                style={{ transform: `translateX(${position}px)` }}
            >
                {items.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={styles.item}
                        style={{
                            backgroundColor: randomColor
                                ? randomSlideColor[index]
                                : '',
                        }}
                    >
                        {slide.text}
                    </div>
                ))}
            </div>
            {!hideControls && (
                <nav className={styles.nav}>
                    <button onClick={previousSlide}>&alt;</button>
                    <button onClick={nextSlide}>&alt;</button>
                </nav>
            )}
        </section>
    );
};

export default MSlide;
