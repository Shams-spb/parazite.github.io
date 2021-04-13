$(document).ready(function() {
    //отправка данных на почту и валидация формы
    $('.form_from').on('submit', function(e) {
        e.stopPropagation();
        
        let out = '';
        if($('.form_input_phone').val() == '') {
            $('.form_input_phone').css('border', '1px solid red');
            $('.error').css('display', 'block');
            out += '<span>Введите пожалуйста номер телефона';
            $('.error').html(out);
        }else{
            //ajax запрос
        }

        $('.form_input_phone').on('focus', function() {
            $('.form_input_phone').css('border', 'none');
            $('.error').css('display', 'none');
        });

        return false;
    });

    //маска для телефона
    $('input[name="phone"]').mask("+7(999) 999-99-99")
});