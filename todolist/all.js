const newarea = document.querySelector('.insertnewin')
const newbtn = document.querySelector('.addbtn')
const list = document.querySelector('.list')
const menu = document.querySelector('.menu')
const undonetotal = document.querySelector('.undonetotal')
const clear = document.querySelector('.clear')



let newin = []
let undone = ''
let done = ''

init()

//初始化
function init(){
	let str = ''
    undone   = ''
	done = ''
	let count = 0
	newin.forEach(function(item,index){
		if(item.check == false){
			let a = `<li>
			<div class="textarea" >
				<input type="checkbox" class="check" data-check='${index}'   >
				 <span class='itemcontent'> ${item.content}</span>
			</div>
			
			<img src="https://hexschool.github.io/js-todo/assets/cancel.jpg" alt="" data-num='${index}'>
			 </li>`
		   str+=a;
		   undone+=a
		   count+=1
		  
		 

		}else{
			let b = `<li>
			<div class="textarea"    >
				<span id='checkedlab'  data-check='${index}' > ✔︎</span>
				 <span class='itemcontent'><del> ${item.content}</del></span>
			</div>
			
			<img src="https://hexschool.github.io/js-todo/assets/cancel.jpg" alt="" data-num='${index}'>
			 </li>`

			str+=b ;
			done+=b;
			
		}

	})
	undonetotal.textContent = `${count}個待完成項目`
	list.innerHTML = str
	
	
	
    
	   
}



//新增
newbtn.addEventListener('click',function(e){
	if(newarea.value == ''){
		return alert('請輸入待辦事項內容！')
	}
    addSomthing()
	init()
	
})

function addSomthing(){
	let data = {}
    data.content = newarea.value
	data.check = false
	newin.push(data) 
    newarea.value = ''
	
}

//刪除
//完成打勾
list.addEventListener('click',function(e){
	//console.log(e.target.nodeName)
	if(e.target.nodeName === 'INPUT'){
		let a = e.target.getAttribute('data-check')
		newin[a].check = true 
		return init()

	}else if(e.target.nodeName === 'SPAN'){
		 let a = e.target.getAttribute('data-check')
		 console.log(newin[a].check)
		 newin[a].check = false
		 return init()
		 
	 }else if(e.target.nodeName === 'IMG'){
		let num = e.target.getAttribute('data-num');
	    newin.splice(num,1)
	    return init()

	 }
	 
})










//filter
menu.addEventListener('click',function(e){
       
	   if(e.target.textContent === '全部'){
		init() 
	   }
	   else if(e.target.textContent === '已完成'){
		   init() 
		   list.innerHTML = done
	   }else{
		   init() 
		   list.innerHTML = undone
	   }


})


//清除已完成
clear.addEventListener('click',function(e){
	e.preventDefault()
	clearDone()
	

})

function clearDone(){
	let newin2 = newin.filter(item=>{
		return item.check == false
	})
	
	newin = newin2
	init()

}
