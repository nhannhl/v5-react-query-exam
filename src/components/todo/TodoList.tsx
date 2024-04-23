import { TodoType } from "../../model"

function TodoList(
  { todoList, isLoading, isError, error }: 
  { todoList: TodoType[] | undefined,
    isLoading: boolean,
    isError: boolean,
    error: any}) {
      if (isLoading) {
        return <div>Loading profile...</div>;
      }
    
      if (isError) {
        return <div>Error: {error.message}</div>;
      }
  return (
    <div>
      {todoList && todoList.map((item: TodoType) => (<div key={item.id} style={{ display: 'flex', gap: '20px' }}>
        <span>{item.id} | {item.userId} | {item.title} | {item.completed ? 'Completed' : 'Not Completed'}</span>
      </div>))}
    </div>
  )
}

export default TodoList