// window.onload = function() {
    var person = [{
        name: '江小哲',
        src: 'img/6.png',
        motto: '须交有道之人，莫结无义之友。饮清静之茶，莫贪花色之酒。开方便之门，闲是非之口。',
        sex: 'boys'
    }, {
        name: '欧阳锋',
        src: 'img/6.png',
        motto: '“我欲”是贫穷的标志。事能常足，心常惬，人到无求品自高。',
        sex: 'boys'
    }, {
        name: '江小白',
        src: 'img/6.png',
        motto: '势不可使尽，福不可享尽，便宜不可占尽，聪明不可用尽。',
        sex: 'boys'
    }, {
        name: '江白哲',
        src: 'img/6.png',
        motto: '做事不必与俗同，亦不宜与俗异。做事不必令人喜，亦不可令人憎。',
        sex: 'boys'
    }, {
        name: '李志成',
        src: 'img/6.png',
        motto: '人之心胸，多欲则窄，寡欲则宽。',
        sex: 'boys'
    }, {
        name: '王嫣然',
        src: 'img/6.png',
        motto: '人的一生也可以是那一杯香醇的酒，慢慢地享受，细细地品味，自然也可以韵出生命的味道。',
        sex: 'girls'
    }, {
        name: '程美',
        src: 'img/6.png',
        motto: '大千世界，人生百态。如何面对人生，是快乐，是悲伤？不能让你的人生去决定，也不是任由命运摆布着你，应该自己把握！',
        sex: 'girls'
    }, {
        name: '李梅芳',
        src: 'img/6.png',
        motto: '人的一生是由色彩交织而成的，有善良的白，沉静的蓝，热情的红，希望的绿和温柔的紫。它们散发出的光彩，则是我们的生命。！',
        sex: 'girls'
    }, {
        name: '南宫小婉',
        src: 'img/6.png',
        motto: '生活就是一块调色板，你选择了你喜欢的色彩，那么其色就更加美丽，人生就似一碗汤，你选择了你喜欢的味道，你才感觉有滋有味……',
        sex: 'girls'
    }, {
        name: '江苏颖',
        src: 'img/6.png',
        motto: '势不可使尽，福不可享尽，便宜不可占尽，聪明不可用尽。',
        sex: 'girls'
    }]
        
    var box = document.querySelector('#box'),//大盒子
        ipt = document.querySelector('#ipt'), //文本框
        spns = document.querySelectorAll('#box span'),
        con = document.querySelector('.con'),//大容器
        currentIndex = 0;

        reader(person,'all');//初始调用一次reader方法

        //给三个按钮绑定事件
        [...spns].forEach(function(item,index){
            item.onclick = function(){
                spns[currentIndex].classList.remove('col'); //将上次点击的按钮上的col类删除
                reader(person,this.className); //切换渲染的数据
                item.classList.add('col'); //给当前元素添加col类
                currentIndex = index; //更新currentIndex值
                //遍历所有子元素
                search(con.children);
            }
        })

        //给文本框绑定事件
        ipt.oninput = function(){
            search(con.children);
        }

        //封装渲染函数
        function reader(arr,cla){
            con.innerHTML = ''; //每次渲染 都将大盒子清空
            person.forEach(function(item){
                if(item.sex === cla || cla === 'all'){
                    con.innerHTML += `<div>
                                        <h5>${item.name}</h5>
                                        <img src = ${item.src}>
                                        <p>${item.motto}</p>
                                      </div>`;
                }
            })
        }

        //封装模糊搜索方法
        function search(nodes){
            //遍历nodes
            [...nodes].forEach(function(item){
                item.style.display = item.firstElementChild.innerHTML.indexOf(ipt.value) != -1 ? 'block':'none';

            })
        } 
// }

