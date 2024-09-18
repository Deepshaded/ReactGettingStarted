import React, {useState} from "react";
import PropTypes from 'prop-types'

function MainContent(props) {
    const [count, setCount] = useState(props.numTopics);
    
    return (
    <maincontent>
        <h3>{props.pageTitle}</h3>
        This is the main content
        <p>There are {count} questions</p>
        <button onClick={()=>setCount(count+1)}>
            Increase question count</button>
    </maincontent>
    )
}
MainContent.propTypes = {
    pageTitle : PropTypes.string
}
export default MainContent;