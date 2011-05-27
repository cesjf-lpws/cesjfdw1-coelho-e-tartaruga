/*
This file are part of CESJFDW1-2011-1.

CESJFGG-2011-1 is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

CESJFGG-2011-1 is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with CESJFDW1-2011-1.  If not, see <http://www.gnu.org/licenses/>.
*/
var passo=document.getElementById("passo");
var tartaruga=document.getElementById("tartaruga");
var pxtartaruga=0, dadotartaruga=0;
var coelho=document.getElementById("coelho");
var pxcoelho=0, dadocoelho=0;
var finalcorrida=false;
passo.addEventListener("click",fPasso,false);
function fPasso(){ 
if(finalcorrida)return;
dadotartaruga = Math.floor(Math.random()*100);
if (dadotartaruga < 80){
   pxtartaruga+=2*5;
}else {
   pxtartaruga-=1*5;
}   
tartaruga.style["margin-left"]=pxtartaruga+"px";
console.log(dadotartaruga);

dadocoelho = Math.floor(Math.random()*100);
if (dadocoelho < 60){
   pxcoelho+=4*5;
}else {
   pxcoelho-=3*5;
}   
coelho.style["margin-left"]=pxcoelho+"px";
console.log(dadocoelho);

if(pxtartaruga >= 100*5){
console.log("Tartaruga ganhou!!!");
finalcorrida=true;
}
if(pxcoelho >= 100*5){
console.log("Coelho ganhou!!!");
finalcorrida=true;
}
}





