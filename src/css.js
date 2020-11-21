const string =
    `
  *{
        margin: 0;
        padding: 0;
    }
    
 li {
    list-style: none;
}

.pikaqiu {
    background: rgb(255, 219, 0);
   
    height: 100vh;
    position: relative;
}

.nose {
    display: block;
    border: 10px solid #2e2e2e;
    position: relative;
    width: 0;
    height: 0;
    margin: 0 auto;
    top: 270px;
    border-width: 15px;
    border-color: #2e2e2e transparent transparent transparent;
    z-index: 888;
}

@keyframes wave {
    0% {
        transform: rotate(0deg);
}
    33% {
        transform: rotate(15deg);
}
    66% {
        transform: rotate(-15deg);
}
    100% {
        transform: rotate(0deg);
}
}

.nose:hover {
    transform-origin: center;
    animation: wave 300ms infinite linear;
}

.yuan {
    position: absolute;
    border: 1px solid #2e2e2e;
    width: 28px;
    height: 8px;
    top: 50%;
    left: 50%;
    margin-left: -15px;
    margin-top: -21px;
    border-radius: 50%;
    background: #2e2e2e;
}

.eye {
    position: absolute;
    border: 2px solid rgb(46, 46, 46);
    width: 74px;
    height: 74px;
    left: 50%;
    margin-top: 228px;
    margin-left: -37px;
    border-radius: 50%;
    background: rgb(46, 46, 46);
}

.eye.left::after {
    content: ' ';
    display: block;
    border: 1px solid black;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #ffffff;
    margin-left: 10px;
    margin-top: 4px;
    box-shadow: 15px 4px 28px #9090AA;
}

.eye.right::before {
    content: ' ';
    display: block;
    border: 1px solid black;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #ffffff;
    margin-left: 10px;
    margin-top: 4px;
    box-shadow: 15px 4px 28px #9090AA;
}

.eye.left {
    transform: translateX(-173px);
}

.eye.right {
    transform: translateX(168px);
}

.mouth {
    width: 200px;
    height: 200px;
    left: 50%;
    top: 50%;
    position: absolute;
    margin-left: -101px;
    top: 340px;
    z-index: 100;
}

.mouth .up .lip {
    position: absolute;
    display: block;
    border: 5px solid #2e2e2e;
    background: rgb(255, 219, 0);
    width: 125px;
    height: 80px;
    border-radius: 50%;
    border-top: none;
    border-left: none;
    border-right: none;
    margin-top: -70px;
    z-index: 999;
}

.mouth .up .lip.left {
    transform: rotate(10deg);
    margin-left: 98px;
}

.mouth .up .lip.right {
    transform: rotate(350deg);
    margin-left: -25px;
}

.mouth .down {
    position: absolute;
    background: rgb(255, 219, 0);
    height: 158px;
    width: 100%;
    top: -28px;
    overflow: hidden;
}

.mouth .down .she {
    position: absolute;
    border: 1px solid red;
    background-color: rgb(150, 5, 19);
    width: 150px;
    height: 600px;
    left: 50%;
    bottom: 0;
    margin-left: -75px;
    border-radius: 75px/300px;
    overflow: hidden;
}

.mouth .down .she .tou {
    position: absolute;
    border: 1px solid red;
    width: 150px;
    height: 600px;
    left: 50%;
    top: 50%;
    background-color: rgb(252, 74, 98);
    margin-top: 193px;
    margin-left: -75px;
    bottom: 0;
    border-radius: 240px/300px;
}

.face {
    position: absolute;
    border: 4px solid #222222;
    width: 100px;
    height: 100px;
    top: 350px;
    left: 50%;
    margin-left: -50px;
}


.face.left {
    transform: translateX(-240px);
    border-radius: 50%;
    background: rgb(252, 13, 28);
}

.face.right {
    transform: translateX(230px);
    background: rgb(252, 13, 28);
    border-radius: 50%;
}
`
export default  string;