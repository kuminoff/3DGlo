(()=>{"use strict";(t=>{const e=document.getElementById("timer-hours"),n=document.getElementById("timer-minutes"),o=document.getElementById("timer-seconds"),s=document.getElementById("timer-days");let r;const m=()=>{let t=(()=>{let t=(new Date("31 december 2022").getTime()-(new Date).getTime())/1e3;return{timeRemaining:t,days:Math.floor(t/3600/24),hours:Math.floor(t/3600%24),minutes:Math.floor(t/60%60),seconds:Math.floor(t%60)}})();return s.textContent=1===t.days.toString().length?"0"+t.days:t.days,e.textContent=1===t.hours.toString().length?"0"+t.hours:t.hours,n.textContent=1===t.minutes.toString().length?"0"+t.minutes:t.minutes,o.textContent=1===t.seconds.toString().length?"0"+t.seconds:t.seconds,t.timeRemaining};m()>0?r=setInterval(m,1e3):(clearInterval(r),s.textContent="00",e.textContent="00",n.textContent="00",o.textContent="00")})()})();