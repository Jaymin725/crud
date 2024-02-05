let list = [
  {
    name: "Jaymin Bhavsar",
    number: "+919054153133",
    email: "jayminbhavsar07@gmail.com",
    course: "Web Development",
    time: "9:00 - 10:00",
  },
  {
    name: "Tony Stark",
    number: "3000",
    email: "tony.stark@starkindustries.com",
    course: "Web Development",
    time: "9:00 - 10:00",
  },
  {
    name: "Bruce Wayne",
    number: "???",
    email: "???",
    course: "???",
    time: "???",
  }
];
let edit_id;

// # Elements
// - Create
const create_btn = document.getElementById("create-button");
const create_close = document.getElementById("create-close");
const create_modal = document.getElementById("create-modal");
const create_name = document.getElementById("create-name");
const create_number = document.getElementById("create-number");
const create_email = document.getElementById("create-email");
const create_course = document.getElementById("create-course");
const create_time = document.getElementById("create-time");
const create_confirm = document.getElementById("create-confirm");
// - Edit
const edit_btn = document.getElementById("edit-button");
const edit_close = document.getElementById("edit-close");
const edit_modal = document.getElementById("edit-modal");
const edit_name = document.getElementById("edit-name");
const edit_number = document.getElementById("edit-number");
const edit_email = document.getElementById("edit-email");
const edit_course = document.getElementById("edit-course");
const edit_time = document.getElementById("edit-time");
const edit_confirm = document.getElementById("edit-confirm");
// - Read
const read_btn = document.getElementById("read-button");
const read_close = document.getElementById("read-close");
const read_modal = document.getElementById("read-modal");
const read_name = document.getElementById("read-name");
const read_number = document.getElementById("read-number");
const read_email = document.getElementById("read-email");
const read_course = document.getElementById("read-course");
const read_time = document.getElementById("read-time");
// - List
const list_body = document.getElementById("list-body");
const total = document.getElementById("total")

// const close_btns = document.querySelectorAll(".close-button");

// # CRUD
// - Create
function create() {
  let list_item = {
    name: create_name.value,
    number: create_number.value,
    email: create_email.value,
    course: create_course.value,
    time: create_time.value,
  };

  if (create_validate(list_item)) {
    list.push(list_item);
    hide_create_modal();
    list_print();
  }
}
// - Edit
function edit() {
  let list_item = {
    name: edit_name.value,
    number: edit_number.value,
    email: edit_email.value,
    course: edit_course.value,
    time: edit_time.value,
  };

  if (edit_validate(list_item)) {
    list[edit_id] = list_item;
    hide_edit_modal();
    list_print();
  }
}
// - Delete
function delete_item(id) {
  list.splice(id, 1);
  list_print();
}

// ## Validate
// - Create
function create_validate(list_item) {
  let valid_name, valid_number, valid_email;

  create_name.classList.toggle(
    "border-red-500",
    (valid_name = list_item.name) == ""
  );
  create_number.classList.toggle(
    "border-red-500",
    (valid_number = list_item.number) == ""
  );
  create_email.classList.toggle(
    "border-red-500",
    (valid_email = list_item.email) == ""
  );

  return valid_name && valid_number && valid_email;
}
// - Edit
function edit_validate(list_item) {
  let valid_name, valid_number, valid_email;

  edit_name.classList.toggle(
    "border-red-500",
    (valid_name = list_item.name) == ""
  );
  edit_number.classList.toggle(
    "border-red-500",
    (valid_number = list_item.number) == ""
  );
  edit_email.classList.toggle(
    "border-red-500",
    (valid_email = list_item.email) == ""
  );

  return valid_name && valid_number && valid_email;
}

// # UI

// ## List
// - Print List
function list_print() {
  total.textContent = list.length;
  list_body.innerHTML = "";
  list.forEach((item, i) => {
    list_body.innerHTML += `<li>
    <div class="basis-2/3 sm:flex">
      <!-- Item Name -->
      <p class="basis-1/2 group/read flex items-center gap-1">
        ${item.name}
        <!-- Read Button -->
        <button onclick="show_read_modal(${i})">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
            class="group-hover/read:block sm:hidden w-5 h-5 fill-gray-400/50">
            <path fill-rule="evenodd"
              d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-7-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9 9a.75.75 0 0 0 0 1.5h.253a.25.25 0 0 1 .244.304l-.459 2.066A1.75 1.75 0 0 0 10.747 15H11a.75.75 0 0 0 0-1.5h-.253a.25.25 0 0 1-.244-.304l.459-2.066A1.75 1.75 0 0 0 9.253 9H9Z"
              clip-rule="evenodd" />
          </svg>
        </button>
      </p>
      <!-- Item Course -->
      <p class="basis-1/2 sm:text-base text-sm">${item.course}</p>
    </div>
    <div class="basis-1/3 text-end">
      <!-- Action Buttons -->
      <span
        class="inline-flex overflow-hidden border border-gray-400/50 rounded-full divide-x divide-gray-400/50 hover:border-gray-400/75 hover:divide-gray-400/75 *:flex *:items-center *:gap-1 *:px-3 *:sm:py-1 *:py-2">
        <!-- Edit Button -->
        <button id="edit-button" class="transition hover:bg-blue-500/75" onclick="show_edit_modal(${i})">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
            <path
              d="M13.488 2.513a1.75 1.75 0 0 0-2.475 0L6.75 6.774a2.75 2.75 0 0 0-.596.892l-.848 2.047a.75.75 0 0 0 .98.98l2.047-.848a2.75 2.75 0 0 0 .892-.596l4.261-4.262a1.75 1.75 0 0 0 0-2.474Z" />
            <path
              d="M4.75 3.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h6.5c.69 0 1.25-.56 1.25-1.25V9A.75.75 0 0 1 14 9v2.25A2.75 2.75 0 0 1 11.25 14h-6.5A2.75 2.75 0 0 1 2 11.25v-6.5A2.75 2.75 0 0 1 4.75 2H7a.75.75 0 0 1 0 1.5H4.75Z" />
          </svg>
          <span class="sm:inline hidden">Edit</span>
        </button>
        <!-- Delete Button -->
        <button class="transition hover:bg-red-500/75" onclick="delete_item(${i})">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
            <path fill-rule="evenodd"
              d="M5 3.25V4H2.75a.75.75 0 0 0 0 1.5h.3l.815 8.15A1.5 1.5 0 0 0 5.357 15h5.285a1.5 1.5 0 0 0 1.493-1.35l.815-8.15h.3a.75.75 0 0 0 0-1.5H11v-.75A2.25 2.25 0 0 0 8.75 1h-1.5A2.25 2.25 0 0 0 5 3.25Zm2.25-.75a.75.75 0 0 0-.75.75V4h3v-.75a.75.75 0 0 0-.75-.75h-1.5ZM6.05 6a.75.75 0 0 1 .787.713l.275 5.5a.75.75 0 0 1-1.498.075l-.275-5.5A.75.75 0 0 1 6.05 6Zm3.9 0a.75.75 0 0 1 .712.787l-.275 5.5a.75.75 0 0 1-1.498-.075l.275-5.5a.75.75 0 0 1 .786-.711Z"
              clip-rule="evenodd" />
          </svg>
          <span class="sm:inline hidden">Delete</span>
        </button>
      </span>
    </div>
  </li>`;
  });
}

// - Modal Window
function toggle_modal() {
  const modal_window = document.getElementById("modal-window");
  modal_window.classList.toggle("hidden");
}

// ## Create Modal
// - Show Create Modal
function show_create_modal() {
  reset_create_modal();
  create_modal.classList.toggle("hidden");
  toggle_modal();
}
// - Hide Create Modal
function hide_create_modal() {
  create_modal.classList.toggle("hidden");
  toggle_modal();
}
// - Reset Create Modal
function reset_create_modal() {
  create_name.value = "";
  create_number.value = "";
  create_email.value = "";
}

// ## Edit Modal
// - Show Edit Modal
function show_edit_modal(id) {
  edit_id = id;

  edit_name.value = list[id].name;
  edit_number.value = list[id].number;
  edit_email.value = list[id].email;
  edit_course.value = list[id].course;
  edit_time.value = list[id].time;

  edit_modal.classList.toggle("hidden");
  toggle_modal();
}
// - Hide Edit Modal
function hide_edit_modal() {
  edit_modal.classList.toggle("hidden");
  toggle_modal();
}
// - Reset Edit Modal
function reset_edit_modal() {
  edit_name.value = "";
  edit_number.value = "";
  edit_email.value = "";
}

// ## Read Modal
// - Show Read Modal
function show_read_modal(id) {
  read_name.textContent = list[id].name;

  read_number.textContent = list[id].number;
  read_number.href = "tel:" + list[id].number;

  read_email.textContent = list[id].email;
  read_email.href = "mailto:" + list[id].email;

  read_course.textContent = list[id].course;
  read_time.textContent = list[id].time;

  read_modal.classList.toggle("hidden");
  toggle_modal();
}
// - Hide Read Modal
function hide_read_modal() {
  read_modal.classList.toggle("hidden");
  toggle_modal();
}

// # Event Listeners
// - Create Button
create_btn.addEventListener("click", show_create_modal);
// - Create Close Button
create_close.addEventListener("click", hide_create_modal);
// - Create Confirm button
create_confirm.addEventListener("click", create);

// - Edit Close Button
edit_close.addEventListener("click", hide_edit_modal);
// - Edit Confirm Button
edit_confirm.addEventListener("click", edit);

// - Read Close Button
read_close.addEventListener("click", hide_read_modal);

// - Close Button
// close_btns.forEach((btn) =>
//   btn.addEventListener("click", function () {
//     toggle_modal();
//   })
// );

list_print();
