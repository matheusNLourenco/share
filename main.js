const btn = document.getElementById('btn');
const result = document.querySelector('.result');

btn.addEventListener('click', async () => {
    const shareContent = document.getElementById('shareContent').value;
    console.log(shareContent)
    try {
      await navigator.share({

          text: shareContent,

      })
    } catch(err) {
      result.textContent = 'Error: ' + e
    }
    result.textContent = 'Compartilhado com sucesso!'
});
