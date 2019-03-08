!function(){
    var duration = 10;
    function writeCode(prefix,code,fn){
        let container=document.querySelector('#code')
        let n = 0
        let id = setTimeout(function run(){
            n += 1
            container.innerHTML = code.substring(0,n)
            styleTags.innerHTML = code.substring(0,n)
            container.scrollTop = container.scrollHeight
            
            if(n < code.length){
               setTimeout(run,duration)
            }else{
                fn && fn.call()
            }
        },duration)
    }

    
    $('.actions').on('click','button',function(e){
        let $button = $(e.currentTarget)
        let speed = $button.attr('data-speed')
        $button.addClass('active')
        .siblings('.active').removeClass('active')
        switch(speed){
            case 'slow':
                duration = 100
                break
            case 'normal':
                duration = 50
                break
            case 'fast':
                duration = 10
                break
        }
        console.log(duration)
     })
    
    let css =`
/*大家好,今天给大家画一只小黄人*/

/*首先，先来一个边框*/

.preview{
    border:1px solid black;
}

/*开始画小黄人的身体*/

.whole-body {
    height: 260px;
    width: 152px;
    margin: 0 auto;
    border-radius: 76px 76px 50px 50px;
    background: #FCE55B;
    position: relative;
}

/*接下来画嘴巴*/

.mouth {
    height: 38px;
    width: 75px;
    position: absolute;
    left: 50%;
    margin-left: -38px;
    top: 130px;
    border-radius: 0 0 38px 38px;
    background: #640F0F;
}

.tongue {
    height: 16px;
    width: 44px;
    background: #D54747;
    border-radius: 22px/8px;
    position: absolute;
    left: 50%;
    margin-left: -22px;
    bottom: 1px;
}

/*然后画小黄人的牙齿*/

.teeth1,
.teeth2,
.teeth3,
.teeth4,
.teeth5 {
    width: 15px;
    height: 11px;
    position: absolute;
    border-radius: 0 0 5px 5px;
    top: 0;
    background: linear-gradient(to top, #FFFFFF, #C7C5C5);
}

.teeth2 {
    left: 15px;
}

.teeth3 {
    left: 30px;
}

.teeth4 {
    left: 45px;
}

.teeth5 {
    left: 60px;
}

/*然后画小黄人的大眼睛*/

.belt1 {
    width: 156px;
    height: 20px;
    background: #2A2A2A;
    position: absolute;
    left: 50%;
    margin-left: -78px;
    top: 61px;
    box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.36);
}

.belt2 {
    width: 84px;
    height: 26px;
    background: #898989;
    position: absolute;
    left: 50%;
    margin-left: -42px;
    top: 58px;
    box-shadow: 1px 1px 1px 0px rgba(0, 0, 0, 0.36);
}
.glass {
    width: 78px;
    height: 78px;
    border-radius: 50%;
    border: 15px solid #898989;
    position: absolute;
    left: 50%;
    margin-left: -39px;
    top: 33px;
    background: radial-gradient(ellipse at center, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 60%, rgba(168, 163, 168, 1) 72%);
}

.eye {
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #3F1515;
    top: 15px;
    left: 13px;
}

.eye::before {
    content: '';
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    top: 7px;
    left: 7px;
    background: #000000;
}

/*好啦，接下来画小黄人的两只手*/

.left-arm {
    height: 55px;
    width: 15px;
    position: absolute;
    transform: rotate(40deg);
    border-radius: 15px;

    left: -20px;
    top: 155px;
    background: #FCE55B;
}

.left-hand {
    height: 65px;
    width: 15px;
    position: absolute;
    border-radius: 15px;
    transform: rotate(-60deg);
    z-index: 1;
    top: 180px;
    left: -12px;
    background: #FCE55B;
}

.right-arm {
    height: 55px;
    width: 15px;

    position: absolute;
    transform: rotate(-50deg);
    border-radius: 15px;
    right: -20px;
    top: 150px;
    background: #FCE55B;
}

.right-hand {
    height: 65px;
    width: 15px;
    position: absolute;
    border-radius: 15px;
    left: 100%;
    top: 175px;
    transform: rotate(55deg);
    background: #FCE55B;
    z-index: 1;
}

/*还有小黄人穿的背带裤*/

.pants {
    height: 47px;
    width: 152px;
    position: absolute;
    border-radius: 0 0 50px 50px;
    bottom: 0;
    background: #336188;
}

.upper-clothes {
    height: 32px;
    width: 93px;
    position: absolute;
    left: 30px;
    bottom: 47px;
    background: #336188;
}

.left-strap {
    width: 12px;
    height: 70px;
    position: absolute;
    border-radius: 10px 0 0 0;
    background: #336188;
    transform: rotate(-50deg);
    left: 16px;
    bottom: 52px;
    box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.4);
    z-index: 1;
}

.right-strap {
    width: 12px;
    height: 70px;
    position: absolute;
    border-radius: 0 10px 0 0;
    background: #336188;
    transform: rotate(50deg);
    right: 14px;
    bottom: 52px;
    box-shadow: -2px 2px 2px 0px rgba(0, 0, 0, 0.4);
    z-index: 1;
}

.front-pocket {
    width: 48px;
    height: 33px;
    position: absolute;
    border-radius: 0 0 20px 20px;
    left: 53px;
    bottom: 25px;
    z-index: 1;
    box-shadow: 1px 1px 2px 2px rgba(0, 0, 0, 0.3);
}

.front-pocket::before {
    content: '';
    display: block;
    width: 18px;
    height: 18px;
    border: 5px solid black;
    position: absolute;
    left: 16px;
    bottom: 8px;
    transform: rotate(45deg);
    box-sizing: border-box;
}

/*左右两个口袋*/

.pocket {
    width: 30px;
    height: 30px;

    border-radius: 0 0 15px 15px;
    background: #336188;
    box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.3);
    position: absolute;
}

.pocket.left {
    transform: rotate(-35deg);
    bottom: 10px;
    z-index: 1;
    left: 14px;
}

.pocket.right {
    transform: rotate(40deg);
    right: 12px;
    bottom: 12px;
    z-index: 1;
}

/*接下来，画小黄人的脚*/
.foot {
    height: 12px;
    width: 30px;

    position: absolute;
    background: #336188;
    bottom: -8px;
}

.foot.left {
    left: 40px
}

.foot.right {
    right: 40px;
}

/*给小黄人穿上鞋子*/
.shoe {
    width: 38px;
    height: 19px;
    position: absolute;
    bottom: -27px;
    border-width: 0 0 5px 0;
    border-style: solid;
    background: #272727;

}

.shoe.left {
    left: 32px;
    border-radius: 8px 0 4px 4px;
}

.shoe.right {
    right: 32px;
    border-radius: 0 8px 4px 4px;
}

/*好啦，一只小黄人画好啦，送给你*/
`
    writeCode('',css)
}()