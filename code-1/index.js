const oBox = document.getElementById('box');
const staticBtn = document.getElementsByTagName('button')[0];
const moveBtn = document.getElementsByTagName('button')[1];
const allBtn = document.getElementsByTagName('button')[2];
const numInput = document.getElementsByTagName('input')[0];
class StaticNumBlock { // 静态数柱的类
    constructor(parent, num, options) {
        this.oBox = parent;
        this.num = num;
        let defaults = {
            content: this.num.value,
            class: '',
            style: {
                height: this.num.value * 20,
                color: '#fff'
            }
        }
        const styles = Object.assign({}, defaults.style, options.style);
        this.setting = Object.assign({}, defaults, options);
        this.setting.style = styles;
        this.init();
    }
    init() {
            let allLive = [...this.oBox.querySelectorAll('.jump')];
            allLive.map(item => {
                item.classList.remove('jump')
            })
            let html = `<div style="${Object.entries(this.setting.style).map(item => {
                return  `${item[0]}:${typeof item[1] === 'number' ? item[1] + 'px' :item[1]}`
                }).join(';')}" class="${this.setting.class}">${this.setting.content}</div>`;
            this.oBox.innerHTML += html;
    }
}
// new StaticNumBlock(oBox, numInput, {
//     style: { width: 15, background: 'red' }
// })

class MoveNumBlock extends StaticNumBlock { // 动态数柱的类
constructor(parent, num, options){
    super(parent, num, options)
}
}

// 分别给按钮添加点击事件，实现所要求的的效果
//添加静态柱状
staticBtn.onclick=()=>{  
    new StaticNumBlock(oBox, numInput, {
        style: { width: 20, background: 'red' }
    })
}

//添加动态柱状
moveBtn.onclick=()=>{
    new MoveNumBlock(oBox, numInput, {
        style: { width: 20, background: 'pink' }, class:'jump'
    })

}

//所有动态柱状
allBtn.onclick=()=>{
    let allLive=[...oBox.querySelectorAll('div')];
    let newarr=[];
        allLive.map(item=>{
        if(item.style.background=='pink'){
            item.classList.remove('jump');
            newarr.push(item)
        }
        return newarr;
        }
        )
        newarr.map(item=>{
            item.classList.add('jump');
        })
}