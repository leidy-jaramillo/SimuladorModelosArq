const $ = id => document.getElementById(id);
const SKILLS = [...new Set(BANK.map(q => q.skill))];
const COLORS = ['#244f43','#497969','#9f6338','#51626f','#73674b'];
let model='c4', view=null, skill=null, busy=false, angles=[0,0];
const views = () => [...new Set(BANK.filter(q=>q.model===model).map(q=>q.view))];
function draw(index,labels,angle){
 const canvas=$('wheel'+(index+1)),ctx=canvas.getContext('2d'),size=640,r=312,arc=Math.PI*2/labels.length;
 ctx.clearRect(0,0,size,size);ctx.save();ctx.translate(320,320);ctx.rotate(angle*Math.PI/180);
 labels.forEach((label,i)=>{let start=-Math.PI/2+i*arc;ctx.beginPath();ctx.moveTo(0,0);ctx.arc(0,0,r,start,start+arc);ctx.closePath();ctx.fillStyle=COLORS[i];ctx.fill();ctx.strokeStyle='#ffffff35';ctx.lineWidth=3;ctx.stroke();ctx.save();ctx.rotate(start+arc/2);ctx.translate(200,0);ctx.rotate(Math.PI/2);ctx.fillStyle='#fff';ctx.font='600 25px Segoe UI, Arial';ctx.textAlign='center';ctx.textBaseline='middle';let words=label.replace('Diagrama de ','').split(' '),lines=[],line='';words.forEach(w=>{if((line+' '+w).trim().length>17){lines.push(line);line=w}else line=(line+' '+w).trim()});lines.push(line);lines.forEach((l,j)=>ctx.fillText(l,0,(j-(lines.length-1)/2)*30));ctx.restore()});ctx.restore();
}
function randomIndex(n){const a=new Uint32Array(1),limit=Math.floor(4294967296/n)*n;do{crypto.getRandomValues(a)}while(a[0]>=limit);return a[0]%n}
function updateButtons(){ $('spin1').disabled=busy;$('spin2').disabled=busy||!view;['c4','vistas','next'].forEach(id=>$(id).disabled=busy);$('copy').disabled=busy||!view||!skill;}
function clearQuestion(){ $('tags').replaceChildren();$('question').textContent='Tu pregunta aparecerá aquí.';$('hint').textContent='Completa los dos sorteos para obtener la pregunta del banco.';$('copyStatus').textContent='';}
function reset(){view=null;skill=null;angles=[0,0];$('viewResult').textContent='Esperando el primer sorteo';$('skillResult').textContent='Primero sortea el diagrama o vista';clearQuestion();draw(0,views(),0);draw(1,SKILLS,0);updateButtons();}
function selectModel(value){if(busy)return;model=value;['c4','vistas'].forEach(id=>$(id).setAttribute('aria-pressed',String(id===model)));$('viewHeading').textContent=model==='c4'?'Diagrama a sustentar':'Vista a sustentar';reset();}
async function spin(index){
 if(busy||(index===1&&!view))return;
 if(index===0){skill=null;view=null;$('skillResult').textContent='Primero sortea el diagrama o vista';clearQuestion()}
 busy=true;updateButtons();const labels=index===0?views():SKILLS,pick=randomIndex(labels.length),from=angles[index],target=((360-(pick+.5)*360/labels.length)%360+360)%360,to=from+1800+((target-from%360+360)%360),duration=matchMedia('(prefers-reduced-motion: reduce)').matches?1:2600;
 $(''+(index===0?'viewResult':'skillResult')).textContent='Sorteando…';
 await new Promise(resolve=>{const start=performance.now();function frame(t){const p=Math.min(1,(t-start)/duration),ease=1-Math.pow(1-p,4);draw(index,labels,from+(to-from)*ease);if(p<1)requestAnimationFrame(frame);else resolve()}requestAnimationFrame(frame)});
 angles[index]=to;
 if(index===0){view=labels[pick];$('viewResult').textContent=view;$('skillResult').textContent='Ahora sortea la habilidad';}else{skill=labels[pick];$('skillResult').textContent=skill;const q=BANK.find(q=>q.model===model&&q.view===view&&q.skill===skill);$('question').textContent=q.question;$('tags').replaceChildren();[model==='c4'?'Modelo C4':'Modelo 4+1 vistas',view,skill].forEach(text=>{const tag=document.createElement('span');tag.textContent=text;$('tags').append(tag)});$('hint').textContent=q.question.includes('tu docente')?'Docente: define el servicio externo o la nueva funcionalidad indicada antes de la respuesta.':'Responde sobre tu solución y señala en el diagrama los elementos involucrados.';}
 busy=false;updateButtons();
}
$('c4').onclick=()=>selectModel('c4');$('vistas').onclick=()=>selectModel('vistas');$('spin1').onclick=()=>spin(0);$('spin2').onclick=()=>spin(1);$('next').onclick=reset;
$('copy').onclick=async()=>{const text=[model==='c4'?'Modelo C4':'Modelo 4+1 vistas',view,skill,$('question').textContent].join('\n');try{await navigator.clipboard.writeText(text);$('copyStatus').textContent='Pregunta copiada.'}catch{const area=document.createElement('textarea');area.value=text;document.body.append(area);area.select();const ok=document.execCommand('copy');area.remove();$('copyStatus').textContent=ok?'Pregunta copiada.':'Selecciona la pregunta para copiarla manualmente.'}};
reset();
function calculateFinalGrade(c4,vistas){return c4*0.5+vistas*0.5;}
function parseGrade(value){
 const text=value.trim();
 if(!text)return {empty:true};
 if(!/^\d+(?:[.,]\d{1,2})?$/.test(text))return {error:true};
 const number=Number(text.replace(',','.'));
 return number>=0&&number<=5?{number}:{error:true};
}
function updateGrades(){
 const inputs=[$('gradeC4'),$('gradeVistas')],grades=inputs.map(input=>parseGrade(input.value));
 inputs.forEach((input,i)=>input.setAttribute('aria-invalid',String(!!grades[i].error)));
 $('finalGrade').textContent='—';
 if(grades.some(g=>g.error)){$('gradeStatus').textContent='Ingresa notas válidas entre 0,0 y 5,0, con máximo dos decimales.';return;}
 if(grades.some(g=>g.empty)){$('gradeStatus').textContent='Ingresa ambas notas para calcular el resultado.';return;}
 const final=calculateFinalGrade(grades[0].number,grades[1].number);
 const format=n=>n.toLocaleString('es-CO',{minimumFractionDigits:2,maximumFractionDigits:2});
 $('finalGrade').textContent=format(final);
 $('gradeStatus').textContent=`${format(grades[0].number)} × 50 % + ${format(grades[1].number)} × 50 % = ${format(final)}`;
}
['gradeC4','gradeVistas'].forEach(id=>$(id).addEventListener('input',updateGrades));
$('clearGrades').onclick=()=>{ $('gradeC4').value='';$('gradeVistas').value='';updateGrades();$('gradeC4').focus(); };
