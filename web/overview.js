window.onload = () => {

    $('.deleteImage').each(function (elem) {
        let btn = $(this)[elem];
        btn.onclick = async function () {
            let imageName = $(this).prev().data('imagename');
            options = {
                method: 'DELETE',
                url: window.location.href + '/' + imageName
            }
            await $.ajax(options);
        }
    });
};