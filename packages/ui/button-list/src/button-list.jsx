import React from 'react';
import Button from '@krupnik/button';

const ButtonList = () => {
    const ar = [
        'ar',
        'arr1',
        'sss',
        'a2'
    ];
    return (
        <div>
            {ar.map((v) => (
                <Button key={v} onClick={() => {}}>{v}</Button>
            ))}
        </div>
    );
};

export default ButtonList;
