document.addEventListener("DOMContentLoaded",()=>{
  const reveals=document.querySelectorAll(".reveal");
  const io=new IntersectionObserver(entries=>{
    entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")})
  },{threshold:.12});
  reveals.forEach(x=>io.observe(x));

  document.querySelectorAll("[data-gallery]").forEach(g=>{
    g.querySelectorAll("img").forEach(img=>img.addEventListener("click",()=>{
      const modal=document.querySelector(".modal");
      const big=modal?.querySelector("img");
      if(modal&&big){big.src=img.src;modal.classList.add("show")}
    }));
  });
  const modal=document.querySelector(".modal");
  if(modal){
    modal.addEventListener("click",e=>{if(e.target===modal||e.target.classList.contains("close"))modal.classList.remove("show")});
  }

  const env=document.querySelector(".envelope");
  if(env) env.addEventListener("click",()=>{
    env.classList.toggle("open");
    document.querySelector(".letter-hidden")?.classList.add("show");
  });

  const gift=document.querySelector(".gift");
  if(gift) gift.addEventListener("click",()=>{
    gift.classList.toggle("open");
    document.querySelector(".gift-message")?.classList.add("show");
  });

  const music=document.querySelector("#music");
  const musicBtn=document.querySelector("#musicBtn");
  if(music&&musicBtn){
    musicBtn.addEventListener("click",()=>{
      if(music.paused){music.play();musicBtn.textContent="⏸ Música"}
      else{music.pause();musicBtn.textContent="▶ Música"}
    });
  }
});