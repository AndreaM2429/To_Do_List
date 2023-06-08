const removeTask = (tasks, index, save, load) => {
  tasks.splice(index, 1);
  for (let i = 0; i < tasks.length; i += 1) {
    tasks[i].index = i + 1;
  }
  save();
  load();
};

export default removeTask;