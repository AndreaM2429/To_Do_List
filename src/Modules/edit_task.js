const editTask = (task, index, inpvalue, save) => {
  task[index].description = inpvalue;
  save();
};

export default editTask;
