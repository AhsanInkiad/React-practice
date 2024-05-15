export default function Todo({ task, isDone }) {
    // props are read only, so task (prosp) er value change korte parbona.
    // isDone er value dhore conditional rendering korbo
   
    // way-1 of conditional rendering
    // if (isDone) {
    //     return (
    //      <li>Task: {task}</li>    
    //     )
    // }
    // return <li>Work on: {task}</li>

    // way-2
    return (
        <li>{isDone ? 'Finished' : 'Work on it'} : {task}</li>
    )


}