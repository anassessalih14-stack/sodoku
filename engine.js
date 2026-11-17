(function(root){
  const shuffle=a=>{for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;};
  function candidates(b,i){const r=Math.floor(i/9),c=i%9;return [1,2,3,4,5,6,7,8,9].filter(n=>!b.some((v,j)=>v===n&&(Math.floor(j/9)===r||j%9===c||(Math.floor(j/27)===Math.floor(r/3)&&Math.floor((j%9)/3)===Math.floor(c/3)))));}
  function count(b,limit=2){let idx=-1,opts;for(let i=0;i<81;i++)if(!b[i]){const p=candidates(b,i);if(!p.length)return 0;if(!opts||p.length<opts.length){idx=i;opts=p;} }if(idx<0)return 1;let total=0;for(const n of opts){b[idx]=n;total+=count(b,limit-total);if(total>=limit)break;}b[idx]=0;return total;}
  function generate(level){const groups=()=>shuffle([0,1,2]).flatMap(g=>shuffle([0,1,2]).map(i=>g*3+i));const rows=groups(),cols=groups(),digits=shuffle([1,2,3,4,5,6,7,8,9]);const solution=rows.flatMap(r=>cols.map(c=>digits[(r*3+Math.floor(r/3)+c)%9]));const puzzle=solution.slice();let left=81;const target={easy:42,medium:34,hard:28}[level]||42;for(const i of shuffle(Array.from({length:81},(_,i)=>i))){const v=puzzle[i];puzzle[i]=0;if(count(puzzle.slice())!==1)puzzle[i]=v;else left--;if(left<=target)break;}return {puzzle,solution};}
  const api={generate,count,candidates};if(typeof module!=='undefined')module.exports=api;else root.Sudoku=api;
})(typeof window!=='undefined'?window:globalThis);
