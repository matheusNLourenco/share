const shareContent = document.getElementById('shareContent');
const btn = document.getElementById('btn');
const result = document.querySelector('.result');

btn.addEventListener('click', async () => {
    try {
      await navigator.share({

          text: 'Ola pessoal',

      })
    } catch(err) {
      result.textContent = 'Error: ' + e
    }
    result.textContent = 'Compartilhado com sucesso!'
});
