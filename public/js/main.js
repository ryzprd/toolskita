
function renderTool(slug){
  const area = document.getElementById("tool-area");
  area.innerHTML = `
    <textarea id="input" placeholder="Masukkan data"></textarea>
    <button onclick="process()">Proses</button>
    <p id="result"></p>
  `;
}

function process(){
  const val = document.getElementById("input").value;
  document.getElementById("result").innerText = "Output: " + val.length;
}
