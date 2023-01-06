import React from 'react';
import '../../styles/tag.css'

function Tag(props) {
    return (
        <li className='tag'>
            {props.tagTitle}
        </li>
    );
}

export default Tag;