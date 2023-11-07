import React from 'react'


function Square(props) {

    return (
        <div>
            <div className='title'>
                {`제목 : ${props.title}`}
            </div>
            <div className='detail'>
                {`내용 : ${props.detail}`}
            </div>
            <button onClick={() => (props.deleteButtonHandler(props.id))}>삭제</button>
            <button onClick={() => (props.doneButtonHandeler(props.id))}>완료</button>
        </div>
    )
}

export default Square;