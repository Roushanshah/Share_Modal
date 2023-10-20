const share_modal = document.querySelector("#share-modal");
const follow_modal = document.querySelector("#follow-modal");

const overlay = document.querySelector("#overlay");

const share_btn = document.querySelector("#share-btn");
const follow_btn = document.querySelector("#follow-btn");

const share_close_btn = document.querySelector("#share-close-btn");
const follow_close_btn = document.querySelector("#follow-close-btn");


const openModal = () => {
  console.log("Button clicked:", event.target.id);
  const elemId = event.target.id;
  if (elemId === "share-btn") {
    share_modal.classList.add("active");
    overlay.classList.add("overlayactive");
  } else if (elemId === "follow-btn") {
    follow_modal.classList.add("active");
    overlay.classList.add("overlayactive");
  }
};

const closeModal = () => {
  console.log("Button clicked:", event.target.id);
  const elemId = event.target.id;
  if (elemId === "share-close-btn") {
    share_modal.classList.remove("active");
    overlay.classList.remove("overlayactive");
  } else if (elemId === "follow-close-btn") {
    follow_modal.classList.remove("active");
    overlay.classList.remove("overlayactive");
  } else {
    share_modal.classList.remove("active");
    follow_modal.classList.remove("active");
    overlay.classList.remove("overlayactive");
  }
};

