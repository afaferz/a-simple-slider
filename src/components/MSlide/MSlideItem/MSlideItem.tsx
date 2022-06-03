import React from 'react';
import styles from './MSlideItem.module.css';

interface IMSlideItemProps {
    id: string | number;
    children?: React.ReactNode;
}
const MSlideItem = ({ children, id }: IMSlideItemProps) => {
    return (
        <div
            key={id}
            data-testid="MSlideItem"
            className={styles.item}
        >
            {children}
        </div>
    );
};

export default MSlideItem;
