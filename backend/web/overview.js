window.onload = () => {

    $('.deleteImage').each(function (elem) {
        let btn = $(this)[elem];
        btn.onclick = async function () {
            let imageName = $(this).prev().data('imagename');
            options = {
                method: 'DELETE',
                url: window.location.href + '/' + imageName
            }
            location.reload();
            $.ajax(options).then(function (data){
                location.reload();
            });
        }
    });

    $('img').each(function (elem) {
        let colormap = $(this).data('colormap');
        $.ajax({url: '/files/colormaps/' + colormap}).then(function (data){
            console.log(data);
        })
    });
};