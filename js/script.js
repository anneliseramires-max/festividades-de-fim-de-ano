document.addEventListener('DOMContentLoaded', function(){
  for(let i=1;i<=6;i++){
    const el = document.getElementById('year'+(i===1? '': i));
    if(el) el.textContent = new Date().getFullYear();
  }

  const openNav = (btnId, navId) => {
    const btn = document.getElementById(btnId);
    const nav = document.getElementById(navId);
    if(!btn || !nav) return;
    btn.addEventListener('click', ()=> nav.classList.toggle('open'));
  };
  openNav('hambtn','mainnav');
  openNav('hambtn2','mainnav2');
  openNav('hambtn3','mainnav3');
  openNav('hambtn4','mainnav4');
  openNav('hambtn5','mainnav5');
  openNav('hambtn6','mainnav6');

  const snowContainer = document.getElementById('snow');
  if(snowContainer){
    for(let i=0;i<60;i++){
      const s = document.createElement('div');
      s.className='snowflake';
      s.style.left = Math.random()*100+'%';
      s.style.top = (-Math.random()*100)+'px';
      s.style.opacity = Math.random();
      s.style.fontSize = (6+Math.random()*18)+'px';
      s.textContent = '❆';
      s.style.color = '#ffffff';
      s.style.position='fixed';
      s.style.zIndex=9;
      s.style.pointerEvents='none';
      s.style.transform='translateY(0)';
      snowContainer.appendChild(s);
      const duration = 6 + Math.random()*8;
      s.animate([
        {transform: 'translateY(0) rotate(0deg)'},
        {transform: 'translateY(110vh) rotate(360deg)'}
      ], {duration: duration*1000, iterations: Infinity, delay: Math.random()*-duration*1000});
    }
  }
});

function validateForm(){
  const nome = document.getElementById('nome');
  const email = document.getElementById('email');
  const assunto = document.getElementById('assunto');
  const mensagem = document.getElementById('mensagem');

  if(!nome.value.trim()){ alert('Por favor, insira seu nome.'); nome.focus(); return false; }
  if(!email.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)){ alert('Por favor, insira um e-mail válido.'); email.focus(); return false; }
  if(!assunto.value.trim()){ alert('Por favor, insira o assunto.'); assunto.focus(); return false; }
  if(!mensagem.value.trim()){ alert('Por favor, escreva a mensagem.'); mensagem.focus(); return false; }

  return true;
}
