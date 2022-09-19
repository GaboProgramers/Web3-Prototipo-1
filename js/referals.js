const copy = document.querySelector(".copiar");

const input = document.querySelector('.url');

copy.addEventListener('click', function() {
    input.focus();
    document.execCommand('selectAll');
    document.execCommand('copy');

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 4000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })
      
      Toast.fire({
        icon: 'success',
        title: 'Text copied to clipboard'
      })
});