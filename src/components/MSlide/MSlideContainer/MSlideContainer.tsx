import React from 'react';
import styles from './MSlideContainer.module.css';

interface MSlideProps {
    cycle?: boolean;
    automatic?: boolean;
    hideControl?: boolean;
    interval?: number;
    children?: React.ReactNode;
}

const MSlide = ({
    children,
    cycle = true,
    hideControl = false,
    automatic = false,
    interval = 1000,
}: MSlideProps) => {
    const [active, setActive] = React.useState<number>(0);
    const [position, setPosition] = React.useState<number>(0);

    const contentRef = React.useRef<HTMLDivElement>(
        document.createElement('div')
    );

    React.useEffect(() => {
        const { width } = contentRef.current.getBoundingClientRect();
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
            else setActive((children as any).length - 1);
            return;
        }

        if (active > 0) setActive(active - 1);
    }
    function nextSlide() {
        if (cycle) {
            if (active < (children as any).length - 1) return setActive(active + 1);
            else setActive(0);
            return;
        }
        if (active < (children as any).length - 1) return setActive(active + 1);
    }

    return (
        <section className={styles.container}>
            <div
                ref={contentRef}
                className={styles.content}
                style={{ transform: `translateX(${position}px)` }}
            >
                {children}
            </div>
            {!hideControl && (
                <nav className={styles.nav}>
                    <button onClick={previousSlide}>&alt;</button>
                    <button onClick={nextSlide}>&alt;</button>
                </nav>
            )}
        </section>
    );
};

export default MSlide;
