
const todoList = [
  {
    task: "Preparar café",
    isCompleted: true,
  },
  {
    task: "Realizar tareas Mit",
    isCompleted: true,
  },
  {
    task: "Leer un libro",
    isCompleted: false,
  },
];

const ToDo = () => {
    const [todos,setTodos] = React.useState(todoList);
    const [value,setValue] = React.useState('');
    
    const onCheckBoxHandle = (e,todo) => {
        let tempTodos = todos;
        tempTodos[e.target.id].isCompleted = !todo.isCompleted;
        setTodos([...tempTodos]);
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        let todo = {
            task:value,
            isCompleted: false
        }
        setTodos([...todos,todo]);
        setValue('');
    }

    const onInputChange = (e) => {
        let receivedValue = e.target.value;
        setValue(receivedValue);
    }

    const onDeleteItemClick = (e) => {
        let tempTodos = todos;
        tempTodos.splice(e.target.id,1);
        setTodos([...tempTodos])
    }

    const onCancelClick = () => {
        setValue('');
    }

    return (
      <div className="container p-3">
        <div className="table-responsive">
          <table className="table align-middle table-striped table-bordered table-hover table-sm">
            <thead className="table-info">
              <tr>
                <th colSpan="3" className="text-center">
                  <i className="fa-solid fa-clipboard-check mx-3"></i> My ToDo's
                </th>
              </tr>
            </thead>
            <tbody>
              {todos.map((todo, i) => (
                <tr id={i} key={i}>
                  <td style = {{textDecorationLine:todo.isCompleted ? 'line-through' : ''}}>
                    <input type="checkbox" className="mx-2" checked={todo.isCompleted ? true : false} id = {i} onChange = {(e)=> {onCheckBoxHandle(e,todo)}}/>
                    {todo.task}
                  </td>
                  <td className="text-center">
                    <button className="btn btn-outline-danger" id = {i} onClick = {(e)=> {onDeleteItemClick(e)}}>
                      <i id = {i} className="fa-solid fa-delete-left"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <form onSubmit = {onSubmitHandler} id = "form1">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Agrega un pendiente"
              onChange = {onInputChange}
              value = {value}
            />
            <button type="submit" form="form1" className="btn btn-outline-success" >
              Agregar
              <i className="fa-solid fa-check mx-1"></i>
            </button>
            <button type="button" className="btn btn-outline-danger" onClick = {onCancelClick}>
              Limpiar
              <i className="fa-solid fa-xmark mx-1"></i>
            </button>
          </div>
        </form>
      </div>
    );
}


ReactDOM.render(<ToDo/>, document.getElementById("root"));