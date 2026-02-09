if (localStorage.getItem("questionnumber") === null) {
  localStorage.setItem("questionnumber", "1");
}
const data = {
  1: {"0": "Coke or Pepsi?", "1": "Coke", "2": "Pepsi" },
  2: {"0": "Taco or Pizza?", "1": "Taco", "2": "Pizza" }
};



function answer(value) {
  const questionnumber = localStorage.getItem("questionnumber");
  window.location.href = `/answer/${questionnumber}/${value}`;
  renderanswers()
}
function renderquestion(a){
    localStorage.setItem("questionnumber", Number(localStorage.getItem("questionnumber")) + a);
    let questionnumber = localStorage.getItem("questionnumber");
    document.getElementById("Start").style.display = 'none'
    const question_text = document.getElementById("question_text")
    const answer1 = document.getElementById("answer1")
    const answer2 = document.getElementById("answer2")
    const answer = document.getElementById("answer")
    const questiona = document.getElementById("question")
    answer.style.display = 'none'
    questiona.style.display = 'flex'
    console.log(questiona.style.display)
    console.log(questiona)
    question_text.innerHTML = data[questionnumber]["0"]
    answer1.innerHTML = data[questionnumber]["1"]
    answer2.innerHTML = data[questionnumber]["2"]
    const maxKey = Math.max(...Object.keys(data).map(Number));
    if(questionnumber === maxKey){
      document.getElementById("Start").style.display = "none"
      document.getElementById("finish").style.display = "Block"
    }
}
function renderanswers(a, b){
    document.getElementById("Start").style.display = 'none'
    const question_text = document.getElementById("question_text_a")
    const answer1_lable = document.getElementById("answer1_text_lable")
    const answer2_lable = document.getElementById("answer2_text_lable")
    const answer1 = document.getElementById("answer1_text")
    const answer2 = document.getElementById("answer2_text")
    answer1.innerHTML = a
    answer2.innerHTML = b
    let questionnumber = localStorage.getItem("questionnumber")
    question_text.innerHTML = data[questionnumber]["0"]
    answer1_lable.innerHTML = data[questionnumber]["1"]
    answer2_lable.innerHTML = data[questionnumber]["2"]
    const answer = document.getElementById("answer")
    const questiona = document.getElementById("question")
    answer.style.display = 'flex'
    questiona.style.display = 'none'
    
    
    const maxKey = Math.max(...Object.keys(data).map(Number));
    if(questionnumber === maxKey){
      document.getElementById("next").style.display = "none"
      document.getElementById("finish").style.display = "Block"
    }
}
const render = document.body.dataset.render; 
if(render == "1"){
    let answer1 = document.body.dataset.total1;
    let answer2 =document.body.dataset.total2;
    renderanswers(answer1, answer2)
}
