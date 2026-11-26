import React from 'react';
import {Friend} from '../data';

export default function Avatar({friend,size=76,stress=0}:{friend:Friend;size?:number;stress?:number}){
 const id=friend.id;
 const isElisa=id==='elisa',isNina=id==='nina',isLeni=id==='leni',isMomo=id==='momo',isCharles=id==='charles';
 const hairColor=id==='clem'?(['#302a32','#77747b','#aaa9ad','#f0eee8'][Math.max(0,Math.min(3,stress))]):isElisa?'#c77b3e':isNina?'#e8bd70':isLeni?'#52382f':isMomo?'#d4a45e':'#59382e';
 const shirt=id==='clem'?'#9fc4df':isElisa?'#718da6':isNina?'#fff1e7':isLeni?'#e1a43d':isMomo?'#547b63':'#8298b6';
 return <svg className="avatar" width={size} height={size} viewBox="0 0 100 100" role="img" aria-label={`Portrait de ${friend.name}`}>
  <defs>
   <linearGradient id={`bg-${id}`} x2="1" y2="1"><stop stopColor="#fff1dc"/><stop offset="1" stopColor={friend.accent}/></linearGradient>
   <linearGradient id={`skin-${id}`} x2="0" y2="1"><stop stopColor="#f6c99f"/><stop offset="1" stopColor={friend.color}/></linearGradient>
  </defs>
  <rect width="100" height="100" rx="24" fill={`url(#bg-${id})`}/>
  <circle cx="15" cy="17" r="5" fill="#fff8e8" opacity=".65"/><circle cx="84" cy="27" r="8" fill="#fff8e8" opacity=".38"/>
  <path d="M8 100 Q12 72 50 69 Q88 72 92 100Z" fill={shirt}/>
  {id==='clem'&&<><path d="M35 73L50 88 65 73 72 100H28Z" fill="#e7f1f8"/><path d="M50 87L45 100H55Z" fill="#6385a5"/></>}
  {isElisa&&<path d="M25 72L50 88 75 72 88 100H12Z" fill="#e8e4dc"/>}
  {isNina&&<><path d="M27 76H73L80 100H20Z" fill="#fff8ee"/><path d="M43 76L50 91 57 76" fill="none" stroke="#d99b87" strokeWidth="3"/></>}
  {isLeni&&<><path d="M15 79L50 89 85 79 94 100H6Z" fill="#263b4d"/><path d="M30 84L50 91 70 84" fill="none" stroke="#f5c45f" strokeWidth="5"/></>}
  {isMomo&&<><path d="M23 75L50 88 77 75 88 100H12Z" fill="#344f42"/><path d="M28 86H72" stroke="#e8e1ca" strokeWidth="3"/></>}
  {isCharles&&<><path d="M23 78Q50 91 77 78L88 100H12Z" fill="#e6edf5"/><path d="M50 88L45 100H55Z" fill="#7189ad"/></>}
  <path d="M22 47Q17 17 49 14Q82 14 80 49L76 68Q65 88 48 84Q27 81 22 58Z" fill={hairColor}/>
  {isLeni&&<path d="M17 36Q20 5 51 9Q82 7 84 36L77 43H23Z" fill="#e7a83d" stroke="#283149" strokeWidth="4"/>}
  {isMomo&&<><path d="M14 29Q47 4 83 26L80 37Q48 26 20 42Z" fill="#e7e5dc" stroke="#30394d" strokeWidth="4"/><path d="M18 35Q2 31 8 43Q14 48 26 40" fill="#e7e5dc" stroke="#30394d" strokeWidth="3"/></>}
  <ellipse cx="50" cy="53" rx="25" ry="30" fill={`url(#skin-${id})`}/>
  {(isElisa||isNina)&&<path d={isElisa?'M22 48Q13 17 46 12Q79 12 79 47Q69 26 53 26Q37 25 22 48Z':'M20 49Q13 14 48 11Q83 13 81 50L73 39Q69 22 53 25Q35 22 27 43Z'} fill={hairColor}/>}
  {isNina&&<g fill="none" stroke="#d99c55" strokeWidth="6" strokeLinecap="round"><path d="M22 29q-8 5 0 12M79 29q8 5 0 12M19 51q-7 6 1 12M81 51q7 6-1 12"/></g>}
  {!isElisa&&!isNina&&!isLeni&&!isMomo&&<path d="M25 43Q20 12 51 15Q77 13 78 43Q62 27 48 29Q34 29 25 43Z" fill={hairColor}/>}
  {isLeni&&<path d="M25 42Q25 15 52 18Q74 16 77 42Z" fill="#52382f"/>}
  {isCharles&&<path d="M27 42Q29 20 51 18Q70 19 77 40L67 34 58 28 42 32Z" fill="#59382e"/>}
  <path d="M31 48Q39 44 46 48M54 48Q62 44 70 48" fill="none" stroke="#6d493b" strokeWidth="2.3" strokeLinecap="round"/>
  <ellipse cx="40" cy="53" rx="3.4" ry="4.3" fill={isElisa?'#477b59':isNina?'#527fa2':'#263044'}/><ellipse cx="60" cy="53" rx="3.4" ry="4.3" fill={isElisa?'#477b59':isNina?'#527fa2':'#263044'}/>
  <path d="M49 57L47 63 51 64" fill="none" stroke="#bd805f" strokeWidth="1.7" strokeLinecap="round"/>
  <ellipse cx="32" cy="64" rx="5" ry="2.5" fill="#e88f83" opacity=".35"/><ellipse cx="68" cy="64" rx="5" ry="2.5" fill="#e88f83" opacity=".35"/>
  <path d="M42 70Q50 76 59 69" fill="none" stroke="#9c5149" strokeWidth="2.5" strokeLinecap="round"/>
  {id==='clem'&&<path d="M29 67Q31 82 50 84Q69 82 71 67L65 70Q60 77 50 77Q40 77 35 70Z" fill="#4a3b39" opacity=".82"/>}
  {id==='clem'&&<><rect x="28" y="47" width="19" height="14" rx="5" fill="none" stroke="#293348" strokeWidth="2.5"/><rect x="53" y="47" width="19" height="14" rx="5" fill="none" stroke="#293348" strokeWidth="2.5"/><path d="M47 53H53" stroke="#293348" strokeWidth="2.5"/><path d="M35 79Q50 86 65 78" stroke="#69473c" strokeWidth="3" fill="none" opacity=".6"/></>}
  {isLeni&&<path d="M20 36Q50 28 80 36" fill="none" stroke="#fff0bb" strokeWidth="3"/>}
  {isMomo&&<path d="M18 34L39 28" stroke="#4e5861" strokeWidth="3" strokeLinecap="round"/>}
 </svg>;
}
