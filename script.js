let matrix = [[-1,-1,-1],
[-1,-1,-1],
[-1,-1,-1]];
let gamegoing = false;
let choosed = false;
let mymove;
const resetbtn = document.getElementById('reset-game');
resetbtn.addEventListener('click',()=>{
    resetgame();
})
const choosex = document.getElementById("choose-x");
    choosex.addEventListener('click',()=>{
        if(choosed == true){
            alert("Game is already in progress");
        }
        else{
            console.log("choosed x");
            choosed = true;
            gamegoing = true;
            mymove = "X";
            choosex.classList.add('bg-blue');
        }
    })
    const chooseo = document.getElementById('choose-o');
    chooseo.addEventListener('click',()=>{
        if(choosed == true){
            alert("Game is already in progress");
        }
        else{
            console.log("choosed o");
            choosed = true;
            gamegoing = true;
            mymove = "O";
            chooseo.classList.add("bg-blue");
        }
    })
    const no0 = document.getElementById("0-0");
    no0.addEventListener('click',()=>{
        console.log("called fill");
        fill(mymove, no0);
    })
    const no1 = document.getElementById("0-1");
    no1.addEventListener('click',()=>{
        console.log("called fill");
        fill(mymove, no1);
    })
    const no2 = document.getElementById("0-2");
    no2.addEventListener('click',()=>{
        console.log("called fill");
        fill(mymove, no2);
    })
    const no3 = document.getElementById("1-0");
    no3.addEventListener('click',()=>{
        console.log("called fill");
        fill(mymove, no3);
    })
    const no4 = document.getElementById("1-1");
    no4.addEventListener('click',()=>{
        console.log("called fill");
        fill(mymove, no4);
    })
    const no5 = document.getElementById("1-2");
    no5.addEventListener('click',()=>{
        console.log("called fill");
        fill(mymove, no5);
    })
    const no6 = document.getElementById("2-0");
    no6.addEventListener('click',()=>{
        console.log("called fill");
        fill(mymove, no6);
    })
    const no7 = document.getElementById("2-1");
    no7.addEventListener('click',()=>{
        console.log("called fill");
        fill(mymove, no7);
    })
    const no8 = document.getElementById("2-2");
    no8.addEventListener('click',()=>{
        console.log("called fill");
        fill(mymove, no8);
    })
function fill(move, element){
    if(gamegoing == false){
        alert("Please start the game by choosing the first character");
    }
    else{
        let firstmove = move;
        if(checkvalidity(element)){
            let id = element.id;
            console.log(id);
            let row = parseInt(id[0]);
            let col = parseInt(id[2]);
            let text = element.children[0];
            text.textContent = firstmove;
            console.log(move == "X");
            if(move == 'X'){
                matrix[row][col] = 1;
                console.log("matrix filled");
                console.log(matrix[row][col]);
            }
            else{
                matrix[row][col] = 0;
                console.log("matrix filled");
                console.log(matrix[row][col]);
            }
            checkwin(row, col);
            if(move == 'O'){
                mymove = "X";
            }
            else{
                mymove = "O";
            }
    }
        else{
            alert("The block is already filled")
    }
    }
}
function checkvalidity(element){
    let id = element.id;
    let row = parseInt(id[0]);
    let col = parseInt(id[2]);
    let block = matrix[row][col];
    if(block == -1){
        return true;
    }
    else{
        return false;
    }
}
function checkwin(row, col){
    let check1 = true;
    let check2 = true;
    for(let i = 0; i < 3 ; i++){
        console.log(i, " ", col, " " , matrix[i][col])
        if(matrix[i][col] != 0){
            check1 = false;
        }
        if(matrix[i][col] != 1){
            check2 = false;
        }
    }
    if(check1){
        showdialog('O');
    }
    if(check2){
        showdialog('X');
    }
    console.log("rejected");
    check1 = true;
    check2 = true;
    for(let i = 0; i < 3; i++){
        console.log(row, " ", i, " " , matrix[row][i])
        if(matrix[row][i] != 0){
            check1 = false;
        }
        if(matrix[row][i] != 1){
            check2 = false;
        }
    }
    if(check1){
        showdialog('O');
    }
    if(check2){
        showdialog('X');
    }
    console.log("rejected");
    check1 = true;
    check2 = true;
    for(let i = 0; i < 3; i++){
        console.log(i, " ", i, " " , matrix[i][i])
        if(matrix[i][i] != 0){
            check1 = false;
        }
        if(matrix[i][i] != 1){
            check2 = false;
        }
    }
    if(check1){
        showdialog("O");
    }
    if(check2){
        showdialog("X");
    }
    console.log("rejected");
    check1 = true;
    check2 = true;
    let j = 2;
    for(let i = 0; i < 3; i++){
        console.log(i, " ", j,  " " , matrix[i][j])
        if(matrix[i][j] != 0){
            check1 = false;
        }
        if(matrix[i][j] != 1){
            check2 = false;
        }
        j--;
    }
    if(check1){
        showdialog("O");
    }
    if(check2){
        showdialog("X");
    }
    console.log("rejected");
}
function resetgame(){
    console.log("game restarted");
    gamegoing = false;
    choosed = false;
    console.log(gamegoing);
    console.log(choosed);
    const no0 = document.getElementById("0-0");
    no0.children[0].textContent = "";
    const no1 = document.getElementById("0-1");
    no1.children[0].textContent = "";
    const no2 = document.getElementById("0-2");
    no2.children[0].textContent = "";
    const no3 = document.getElementById("1-0");
    no3.children[0].textContent = "";
    const no4 = document.getElementById("1-1");
    no4.children[0].textContent = "";
    const no5 = document.getElementById("1-2");
    no5.children[0].textContent = "";
    const no6 = document.getElementById("2-0");
    no6.children[0].textContent = "";
    const no7 = document.getElementById("2-1");
    no7.children[0].textContent = "";
    const no8 = document.getElementById("2-2");
    no8.children[0].textContent = "";
    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            matrix[i][j] = -1;
        }
    }
    const choosex = document.getElementById("choose-x");
    const chooseo = document.getElementById('choose-o');
    choosex.classList.remove("bg-blue");
    chooseo.classList.remove("bg-blue");
    const dialogbox = document.getElementById("dialog");
    const maindiv = document.getElementById("main");
    maindiv.removeChild(dialogbox);

}
function showdialog(element){
    const main = document.getElementById("main");
    const maindiv = document.createElement('div');
    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    const text1 = document.createElement('h1');
    const text2 = document.createElement('h1');
    const okaybtn = document.createElement('button');
    text1.textContent = element;
    text2.textContent = "You Won!!";
    okaybtn.classList.add('h-10', 'w-32', 'border-4', 'border-red-600', 'rounded-xl', 'bg-red-300', 'font-mono', 'text-white', 'font-bold', 'text-lg');
    okaybtn.textContent = "Okay";
    text1.classList.add('text-9xl', 'font-bold', 'text-blue-500');
    text2.classList.add('text-3xl', 'font-bold', 'text-green-500');
    maindiv.classList.add('border-4', 'border-blue-400', 'h-64', 'rounded-2xl', 'w-64', 'flex', 'flex-col', 'items-center', 'justify-evenly', 'mx-auto', 'mt-10','zindex-10');
    div1.appendChild(text1);
    div2.appendChild(text2);
    maindiv.appendChild(div1);
    maindiv.appendChild(div2);
    maindiv.appendChild(div2);
    maindiv.id = "dialog";
    okaybtn.addEventListener('click',()=>{
        main.removeChild(maindiv);
    })
    maindiv.appendChild(okaybtn);
    main.appendChild(maindiv);
}