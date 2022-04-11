const btn = document.getElementById('btn');
const shareContent = document.getElementById('shareContent');

function copyText() {
    const shareContent = document.getElementById('shareContent');

    shareContent.select();
    shareContent.setSelectionRange(0, 99999)
    document.execCommand("copy");
}

btn.addEventListener('click', async () => {

    copyText()

    try {
      await navigator.share({

          text: shareContent.value,

      })
    } catch(err) {
      result.textContent = 'Error: ' + e
    }

});
