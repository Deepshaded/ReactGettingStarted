import React from "react";
import PropTypes from 'prop-types'

function MainContent(props) {
    return (
    <maincontent>
        <h3>{props.pageTitle}</h3>
        This is the main content
    </maincontent>
    )
}
MainContent.PropTypes={
    pageTitle : PropTypes.string
}
export default MainContent;