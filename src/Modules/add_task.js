const addTask = (taskslist, save, load) => {
  const newTask = document.querySelector('.inpadd');
  const ind = taskslist.length + 1;
  const TasksArr = {
    description: newTask.value,
    completed: false,
    index: ind,
  };
  taskslist.push(TasksArr);
  save();
  load();
  newTask.value = '';
};

export default addTask;