
const ROTATE_SECONDS = 60;
let messages = [];
let current = 0;

async function loadMessages(){
  try{
    const res = await fetch('verses.json');
    const data = await res.json();
    messages = data.messages || [];
    if(messages.length === 0){
      document.getElementById('message-title').textContent = 'SoulVibe Sanctuary';
      document.getElementById('verse-line').textContent = '';
      return;
    }
    show(0);
    setInterval(() => { next(); }, ROTATE_SECONDS * 1000);
  }catch(err){
    console.error('Failed to load verses.json', err);
    document.getElementById('message-title').textContent = 'Failed to load verses';
  }
}

function show(i){
  current = i % messages.length;
  const msg = messages[current];
  const title = msg.title || 'SoulVibe Sanctuary';
  const verse = (msg.references && msg.references.length) ? msg.references[0] : '';
  const titleEl = document.getElementById('message-title');
  const verseEl = document.getElementById('verse-line');
  // update with fade
  titleEl.classList.remove('fade');
  verseEl.classList.remove('fade');
  void titleEl.offsetWidth;
  titleEl.textContent = title;
  verseEl.textContent = verse;
  titleEl.classList.add('fade');
  verseEl.classList.add('fade');
}

function next(){ show(current + 1); }

window.addEventListener('DOMContentLoaded', loadMessages);
