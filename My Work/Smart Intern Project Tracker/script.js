/* Smart Intern Project Tracker - frontend prototype
   - Add tasks (title, assignee, deadline, priority)
   - Mark complete / undo / delete tasks
   - Persist tasks & goals in localStorage
   - Simple modal for auth (frontend only)
*/

const selectors = {
  taskForm: document.getElementById('task-form'),
  taskTableBody: document.querySelector('#task-table tbody'),
  tasksCount: document.getElementById('tasks-count'),
  tasksDone: document.getElementById('tasks-done'),
  progressFill: document.getElementById('progress-fill'),
  goalInput: document.getElementById('goal-input'),
  addGoalBtn: document.getElementById('add-goal'),
  goalsList: document.getElementById('goals-list'),
  getStarted: document.getElementById('get-started'),
  modal: document.getElementById('modal'),
  modalTitle: document.getElementById('modal-title'),
  authForm: document.getElementById('auth-form'),
  btnLogin: document.getElementById('btn-login'),
  btnSignup: document.getElementById('btn-signup'),
  modalClose: document.getElementById('modal-close'),
  year: document.getElementById('year'),
  activity: document.getElementById('activity')
};

let tasks = JSON.parse(localStorage.getItem('sit_tasks') || '[]');
let goals = JSON.parse(localStorage.getItem('sit_goals') || '[]');

function save() {
  localStorage.setItem('sit_tasks', JSON.stringify(tasks));
  localStorage.setItem('sit_goals', JSON.stringify(goals));
}

function escapeHtml(text) {
  if (!text) return '';
  return text.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}

function renderTasks() {
  selectors.taskTableBody.innerHTML = '';
  if (!tasks.length) {
    selectors.taskTableBody.innerHTML = '<tr><td colspan="6" class="muted">No tasks yet — create one above.</td></tr>';
  } else {
    tasks.forEach((t, idx) => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${escapeHtml(t.title)}</td>
        <td>${escapeHtml(t.assignee || '—')}</td>
        <td>${t.deadline || '—'}</td>
        <td><span class="tag ${t.priority.toLowerCase()}">${t.priority}</span></td>
        <td>${t.completed ? '<span class="status">Completed</span>' : '<span class="muted">Pending</span>'}</td>
        <td>
          ${t.completed ? <button class="btn" data-action="undo" data-index="${idx}">Undo</button> : <button class="btn primary" data-action="done" data-index="${idx}">Mark Done</button>}
          <button class="btn ghost" data-action="delete" data-index="${idx}">Delete</button>
        </td>
      `;
      selectors.taskTableBody.appendChild(tr);
    });
  }
  updateStats();
  renderActivity();
}

function renderGoals() {
  selectors.goalsList.innerHTML = '';
  if (!goals.length) {
    selectors.goalsList.innerHTML = '<li class="muted">No goals yet — add one to keep the team focused.</li>';
  } else {
    goals.forEach((g, i) => {
      const li = document.createElement('li');
      li.innerHTML = `
        <div style="display:flex;gap:8px;align-items:center;">
          <div class="goal-badge">${g.target === 1 ? 'Small' : g.target === 2 ? 'Medium' : 'Large'}</div>
          <div style="flex:1">${escapeHtml(g.title)}</div>
        </div>
        <div>
          <button class="btn" data-action="goal-complete" data-index="${i}">Complete</button>
          <button class="btn ghost" data-action="goal-delete" data-index="${i}">Delete</button>
        </div>
      `;
      selectors.goalsList.appendChild(li);
    });
  }
}

function updateStats() {
  const total = tasks.length;
  const done = tasks.filter(t => t.completed).length;
  selectors.tasksCount.textContent = total;
  selectors.tasksDone.textContent = done;
  const pct = total === 0 ? 0 : Math.round((done / total) * 100);
  selectors.progressFill.style.width = pct + '%';
}

function renderActivity() {
  // show the 5 latest actions (task added/completed/deleted)
  const lines = [];
  tasks.slice(0,5).forEach(t => {
    const when = new Date(t.createdAt).toLocaleString();
    lines.push(<div>${escapeHtml(t.title)} — ${t.completed ? 'Completed' : 'Open'} <span class="muted">(${when})</span></div>);
  });
  selectors.activity.innerHTML = lines.length ? lines.join('') : '<p class="muted">No recent activity yet — add a task or mark one complete!</p>';
}

/* Events */
selectors.taskForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.getElementById('task-title').value.trim();
  const assignee = document.getElementById('task-assignee').value.trim();
  const deadline = document.getElementById('task-deadline').value;
  const priority = document.getElementById('task-priority').value;

  if (!title) return alert('Please add a task title.');

  const newTask = { title, assignee, deadline, priority, completed: false, createdAt: Date.now() };
  tasks.unshift(newTask);
  save();
  renderTasks();
  selectors.taskForm.reset();
});

document.querySelector('#task-table tbody').addEventListener('click', (e) => {
  const btn = e.target.closest('button');
  if (!btn) return;
  const action = btn.dataset.action;
  const idx = Number(btn.dataset.index);

  if (action === 'done') tasks[idx].completed = true;
  else if (action === 'undo') tasks[idx].completed = false;
  else if (action === 'delete') {
    if (!confirm('Delete this task?')) return;
    tasks.splice(idx, 1);
  }
  save();
  renderTasks();
});

selectors.addGoalBtn.addEventListener('click', () => {
  const title = selectors.goalInput.value.trim();
  const targetSel = document.getElementById('goal-target');
  const target = Number(targetSel.value || 2);
  if (!title) return alert('Enter a goal title.');

  goals.unshift({ title, target, createdAt: Date.now() });
  save();
  renderGoals();
  selectors.goalInput.value = '';
});

selectors.goalsList.addEventListener('click', (e) => {
  const btn = e.target.closest('button');
  if (!btn) return;
  const action = btn.dataset.action;
  const idx = Number(btn.dataset.index);
  if (action === 'goal-complete') {
    if (confirm('Mark goal complete?')) {
      goals.splice(idx, 1);
      save();
      renderGoals();
    }
  } else if (action === 'goal-delete') {
    if (confirm('Delete this goal?')) {
      goals.splice(idx, 1);
      save();
      renderGoals();
    }
  }
});

/* Tiles & modal */
document.querySelectorAll('.tile').forEach(tile => {
  tile.addEventListener('click', () => {
    const feature = tile.dataset.feature;
    alert(Feature placeholder: ${feature} (frontend demo).);
  });
});

selectors.getStarted.addEventListener('click', () => openModal('Get started — create account'));
selectors.btnLogin.addEventListener('click', () => openModal('Log in to Smart Intern'))