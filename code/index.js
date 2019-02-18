const oBox = document.getElementById('box');
const staticBtn = document.getElementsByTagName('button')[0];
const moveBtn = document.getElementsByTagName('button')[1];
const numInput = document.getElementsByTagName('input')[0];
const allBtn = document.getElementsByTagName('button')[2];
class StaticNumBlock { // 静态数柱的类
    constructor(parent, options) {
        this.parent = document.querySelector(parent);
        // console.log(this.parent);
        this.options = options;
        this.render();
    }
    render() {
        let div = document.createElement('div');
        div.className = this.options.classname;
        div.style =
            (Object.entries(this.options.style).map((item) => item[0] + ":" + (typeof item[1] == "string" ? item[1] : item[1] + "px"))).join("");

        div.innerHTML = this.options.text;
        this.parent.appendChild(div);

    }
}

class MoveNumBlock extends StaticNumBlock { // 动态数柱的类
    constructor(parent, options) {
        super(parent, options);
        this.move();
    }
    move() {

    }
}


// 分别给按钮添加点击事件，实现所要求的的效果

numInput.onkeydown = function(e) {
    if (e.keyCode == 13) {
        staticBtn.onclick = function() {
            let staticNumBlock = new StaticNumBlock('#box', {
                style: {
                    height: 30,
                    width: 40,
                    background: "red",
                    display: "inline-block",
                    "line-height": 30,
                    "text-align": "center"
                },
                classname: "red",
                text: numInput.value
            });
        }
        moveBtn.onclick = function() {
            new StaticNumBlock('#box', {
                style: {
                    height: 30,
                    width: 40,
                    background: "pink",
                    display: "inline-block",
                    "line-height": 30,
                    "text-align": "center"
                },
                classname: "pink",
                text: numInput.value
            });
        }
    }
}