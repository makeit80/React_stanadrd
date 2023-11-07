import React from 'react'


function Square(props) {
    function nameSwitch (isDone) {
        if (isDone === true) {
            return "취소"
        } else {
            return "완료"
        }
    }

    return (
        <div>
            <div className='title'>
                {`제목 : ${props.title}`}
            </div>
            <div className='detail'>
                {`내용 : ${props.detail}`}
            </div>
            <button onClick={() => (props.deleteButtonHandler(props.id))}>삭제</button>
            <button onClick={() => (props.doneButtonHandeler(props.id))}>{nameSwitch(props.isDone)}</button>
        </div>
    )
}

export default Square;