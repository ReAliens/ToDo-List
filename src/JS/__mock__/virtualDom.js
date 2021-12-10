const virtualDom = () => {
  document.body.innerHTML = `<div class="list-container">
      <div class="list-title">
      <h4>Todays To Do</h4>
      <button type="button">
      <img src="https://media.flaticon.com/dist/min/img/uicons/icons/rounded/regular/fi-rr-rotate-right.svg" width="14" alt="Refresh">
      </button>
      </div>
      <div class="list-add">
      <input type="text" placeholder="Add to your list..." id="input-add">
      <button type="button" id="button-add">
      <img src="https://media.flaticon.com/dist/min/img/uicons/icons/rounded/regular/fi-rr-add.svg" width="14" alt="Add task">
      </button>
      </div>
      <div class="list-content"></div>
      <button type="button" id="button-clear">Clear all Completed</button>
      </div>;`;
};

export default virtualDom;
