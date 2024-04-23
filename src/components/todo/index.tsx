import { useState, useEffect } from "react";
import { useTodos, useTodoSearch } from "../../services/queries/";
import TodoList from "./TodoList";
import Search from "./Search";
import { TodoType } from "../../model";
// import { useQueryClient } from "@tanstack/react-query";
// import { Constant } from "../../config";

function Todo() {
  const [userIds, setUserIds] = useState<number[]>([]);
  const [searchObject, setSearchObject] = useState(null);

  const todoList = useTodos();
  const todoListSearch = useTodoSearch(searchObject);

  // const queryClient = useQueryClient();
  // queryClient.getQueryCache().getAll().map(item => {
  //   if(item.queryKey.includes(Constant.QUERY_KEY.POST.POSTS)) {
  //     item.reset();
  //   }
  // });

  useEffect(() => {
    if (todoList.data) {
      setUserIds(Array.from(new Set((todoList.data.map((item: TodoType) => item.userId)))));
    }
  }, [todoList.data])

  const handleSearch = (searchObjectParams: any) => {
    setSearchObject(searchObjectParams);
  }

  return (
    <div>
      <h1>Todo List</h1>
      <Search userIds={userIds} handleSearch={handleSearch} searchObject={searchObject} />
      <TodoList todoList={todoListSearch.data ? todoListSearch.data : todoList.data} 
        isLoading={todoList.isLoading || todoListSearch.isLoading} 
        isError={todoList.isError || todoListSearch.isError} 
        error={todoList.error || todoListSearch.error} />
    </div>
  )
}

export default Todo;