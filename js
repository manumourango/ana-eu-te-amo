let code = '';

function press(num) {
  if (code.length < 6) {
    code += num;
    document.getElementById('display').innerText = code.padEnd(6, '-');
  }
}

function backspace() {
  code = code.slice(0, -1);
  document.getElementById('display').innerText = code.padEnd(6, '-');
}

function clearCode() {
  code = '';
  document.getElementById('display').innerText = '------';
}

function openVault() {
  if (code === '260607') {
    document.getElementById('confetti').classList.remove('hidden');
    document.getElementById('bgMusic').play();
    setTimeout(() => {
      document.getElementById('confetti').classList.add('hidden');
      document.getElementById('surprise').classList.remove('hidden');
    }, 3000);
  } else {
    alert('Senha errada 🥺');
    clearCode();
  }
}
