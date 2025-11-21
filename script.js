
/*
  script.js - loads verses.json, rotates message sets every 60 seconds.
  Expects verses.json to be in same folder and to have structure:
  { "messages": [ { "title": "...", "references": ["Psalm 23:1","John 3:16", ...] }, ... ] }
*/
const ROTATE_SECONDS = 60; // user requested 60s rotation
let messages = [];
let currentIndex = 0;

async function loadMessages(){
  try{
    const res = await fetch('verses.json');
    const data = await res.json();
    messages = data.messages || [];
    if(messages.length === 0){
      document.getElementById('message-title').textContent = 'No verses loaded';
      return;
    }
    showMessage(0);
    setInterval(()=>{ nextMessage(); }, ROTATE_SECONDS * 1000);
  }catch(err){
    console.error('Failed to load verses.json', err);
    document.getElementById('message-title').textContent = 'Failed to load verses.json';
  }
}

function showMessage(i){
  currentIndex = i % messages.length;
  const msg = messages[currentIndex];
  document.getElementById('message-title').textContent = msg.title || '';
  const list = document.getElementById('verse-list');
  list.innerHTML = '';
  for(const ref of (msg.references || [])){
    const el = document.createElement('div');
    el.className = 'verse-item';
    el.textContent = ref; // this displays the reference (book chapter:verse). Optionally fetch full text via Bible API.
    list.appendChild(el);
  }
}

function nextMessage(){
  showMessage(currentIndex + 1);
}

window.addEventListener('DOMContentLoaded', loadMessages);
