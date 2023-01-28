const List = ({ todos }) => {
  return (
    <div>
      <ul>
        {todos.map(todo => <li>{todo.todo}</li>)}
      </ul>
    </div>
  )
}

export default List