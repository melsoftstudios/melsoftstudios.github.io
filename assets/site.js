const MOLSOFT_VIDEOS = {"cosmic-hop":"videos/cosmic-hop.mp4","berry-blitz":"videos/berry-blitz.mp4","rocket-raccoon":"videos/rocket-raccoon.mp4","pixel-garden":"videos/pixel-garden.mp4"};
const gameDialog=document.getElementById('gameDialog');
if(gameDialog){const player=document.getElementById('gameVideo');const caption=document.getElementById('videoCaption');
 document.querySelectorAll('[data-game]').forEach(button=>button.addEventListener('click',()=>{const key=button.dataset.game;const src=MOLSOFT_VIDEOS[key];if(!src)return;player.pause();player.src=src;player.load();caption.textContent=button.closest('.game')?.querySelector('h3')?.textContent+' — Gameplay Preview'||'Gameplay Preview';gameDialog.showModal();player.play().catch(()=>{});}));
 const close=()=>gameDialog.close();gameDialog.querySelector('.video-close').addEventListener('click',close);
 gameDialog.addEventListener('click',event=>{if(event.target===gameDialog)close();});
 gameDialog.addEventListener('close',()=>{player.pause();player.removeAttribute('src');player.load();});
}
