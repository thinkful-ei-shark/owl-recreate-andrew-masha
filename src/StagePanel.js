import React from 'react'

function StagePanel(props) {

    return(
        <div className='stage-panel'>
            <div className='stage-name'>
                {props.name}
            </div>
            <div className='stage-avatar'>
                <img src={props.avatar} alt='avatar'/>
            </div>
        </div>
    )
}

export default StagePanel