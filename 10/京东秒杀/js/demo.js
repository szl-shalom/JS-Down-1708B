var cTime = document.querySelector('#cTime'),
	imgs = document.querySelectorAll('.p_all dl'),
	prev = document.querySelector('#prev'),
	next = document.querySelector('#next'),
	count = 0;
	countDown('2019-6-1');
	setInterval("countDown('2019-6-1')",1000);	
	function countDown(time){
		var timer = new Date(time) - new Date(),
			day = parseInt(timer / 1000 / 60 / 60 / 24),
			hours = parseInt(timer / 1000 / 60 / 60 % 24),
			mintues = parseInt(timer / 1000 / 60 % 60),
			seconds = parseInt(timer / 1000  % 60);
			
			cTime.innerHTML = `<span>${addZero(day)}</span><span>${addZero(hours)}</span><span>${addZero(mintues)}</span><span>${addZero(seconds)}</span>`;
	}

	//给左边按钮绑定事件
	prev.onclick = function(){
		if(count > 0){
			count--;
		}
		changeImg(count);
	}

	//给右边按钮绑定事件
	next.onclick = function(){
		if(count < 2){
			count++;
		}
		changeImg(count);
	}

	//封装改变图片的公共方法
	function changeImg(n){
		[...imgs].forEach(function(item,index){
			item.style.display = index >= n * 4 && index <= n * 4 + 3 ? 'block' : 'none'; 
		})
	}

	//封装补0函数
	function addZero(val){
		return val < 10 ? '0' + val : val;
	}