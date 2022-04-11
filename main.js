const shareContent = document.getElementById('shareContent');
const btn = document.getElementById('btn');
const result = document.querySelector('.result');

btn.addEventListener('click', async () => {
    try {
      await navigator.share({
          title: '',
          text: shareContent.value,
          url: ''
      })
    } catch(err) {
      result.textContent = 'Error: ' + e
    }
    result.textContent = 'Compartilhado com sucesso!'
});
