document.getElementById('start-ar').addEventListener('click', function() {
    navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
      .then(function(stream) {
        const target = document.getElementById('target');
        target.setAttribute('nft', 'src', 'path/to/target/image');
      })
      .catch(function(error) {
        console.log('Error accessing camera:', error);
      });
  });