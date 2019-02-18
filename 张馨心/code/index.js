const oBox = document.getElementById('box');
const staticBtn = document.getElementsByTagName('button')[0];
const moveBtn = document.getElementsByTagName('button')[1];
const numInput = document.getElementsByTagName('input')[0];
const allBtn = document.getElementsByTagName('button')[2];
class StaticNumBlock { // 静态数柱的类
    constructor(parent, event, options) {
        this.parent = parent;
        this.options = options;
        this.event = event;
        this.init();
    }
    init() {
            if (this.event.innerHTML == '所有会动的数柱依次运动') {
                this.event.addEventListener('click', () => {
                    alert();
                });
            } else {
                this.event.addEventListener('click', () => {
                            let html = '';
                            let text = numInput.value;
                            let length = text * 1;
                            if (length > 10 || length < 1) {
                                alert('输入的内容超过');
                            } else {
                                for (var i = 0; i < length; i++) {
                                    html += `<div class="${this.options.background == 'red'?'statics':'moves'}" style="${
                                Object.entries(this.options).map(item=>{
                                    return `${item[0]}:${ typeof item[1] ==='string'?item[1]:item[1]+'px'}`
                                }).join(';')
                            }">${text}</div>`;
                        }
                        this.parent.innerHTML += html;
                        this.down();
                    }
        })
                    }
    }
    down(){
        let downs = Array.from(document.querySelectorAll('.moves'));
        let time,times;
        downs.map(item=>{
            item.addEventListener('click',()=>{
                alert();
                time = setTimeout(()=>{
                    item.style.marginTop = '40px'
                },100);
                times = setTimeout(()=>{
                    item.style.marginTop = '10px'
                },200);
            })
        });
    }
}

class MoveNumBlock extends StaticNumBlock { // 动态数柱的类
    
}

// 分别给按钮添加点击事件，实现所要求的的效果

let static = new StaticNumBlock(oBox, staticBtn, {
    background: 'red',
    width: 50,
    height: 50,
    margin: 10,
    'font-size':16,
    'line-height':50,
    'text-align':'center',
    display:'inline-block'
});

let move = new MoveNumBlock(oBox, moveBtn, {
    background: 'pink',
    width: 50,
    height: 50,
    margin: 10,
    'font-size':16,
    'line-height':50,
    'text-align':'center',
    display:'inline-block'
});