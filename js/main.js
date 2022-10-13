$(document).ready(function () {

    $(function () {
        $("#datepicker").datepicker();
    });

    (function ($) {
        $('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');

        $('.tab ul.tabs li a').click(function (g) {
            var tab = $(this).closest('.tab'),
                index = $(this).closest('li').index();

            tab.find('ul.tabs > li').removeClass('current');
            $(this).closest('li').addClass('current');

            tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
            tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();

            g.preventDefault();
        });
    })(jQuery);

    function scrollBlock() {
        $("html, body").animate(
            {scrollTop: $(".form-orders-section").offset().top},
            1000
        );
    }

    $('input[name="auto"]').on("click", function () {
        $(".select-car label").addClass("hidden");
        $($(this).parent()).removeClass("hidden");
        $(".select-car span").addClass("action");
        $(".select-car").addClass("select");


        var tab = $($('.custom-tab').eq(1)[0]).closest('.tab'),
            index = $($('.custom-tab').eq(1)[0]).closest('li').index();

        tab.find('ul.tabs > li').removeClass('current');
        $($('.custom-tab').eq(1)[0]).closest('li').addClass('current');

        tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
        tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();

        scrollBlock();
    });

    $(".select-car span").click(function () {
        $(this).toggleClass("action");
        $('input[name="auto"]').prop("checked", false);

        $(".select-car label").toggleClass("hidden");
        $(".select-car").removeClass("select");
    });

    $(".next, .skip").click(() => {
        var tab = $($('.custom-tab').eq(2)[0]).closest('.tab'),
            index = $($('.custom-tab').eq(2)[0]).closest('li').index();

        tab.find('ul.tabs > li').removeClass('current');
        $($('.custom-tab').eq(2)[0]).closest('li').addClass('current');

        tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
        tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();

        scrollBlock();
    });

    $(".done-order").click(() => {
        let typeAuto = $('input[name="auto"]:checked').val(),
            fromCity = $(".from").val(),
            toCity = $(".to").val(),
            dateShipping = $("#datepicker").val()
        if (typeAuto !== undefined && fromCity != '' && toCity != '' && dateShipping != '') {
            $("#result").html(
                `Вы хотите доставить ${typeAuto} из ${fromCity} в ${toCity}. Желаемая дата отправки -${dateShipping}`
            );
        } else {
            $("#result").html("Вы не заполнили важные поля");
        }
        var tab = $($('.custom-tab').eq(3)[0]).closest('.tab'),
            index = $($('.custom-tab').eq(3)[0]).closest('li').index();

        tab.find('ul.tabs > li').removeClass('current');
        $($('.custom-tab').eq(3)[0]).closest('li').addClass('current');

        tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
        tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();

        scrollBlock();
    })

    $(".ready-order").click(() => {
            let data = [
                $(".name"),
                $(".phone"),
                $(".from"),
                $(".to"),
                $("#datepicker"),
            ]

            let car = $('input[name="auto"]:checked').val(),
                from = $(".from").val(),
                to = $(".to").val(),
                date = $("#datepicker").val(),
                phone = $(".phone").val(),
                name = $(".name").val(),
                desc = $('.brand-auto').val() + ' ' + $('.model-auto').val()

            if (validateOrder(data)) {
                let objMain = {
                    data: {
                        'transport_kind': car,
                        'from': from,
                        'to': to,
                        'phone': phone,
                        'email': name,
                        'date': date,
                        'transport_desc': desc,
                    },
                    "form_kind": "main"
                }
                sendAjaxRequest(objMain);
                // window.location.replace("/order_success");
            }
        }
    )

    //   функция валидации
    function validateOrder(data) {
        let errors = false
        for (let i = 0; i < data.length; i++) {
            let itemValue = data[i].val();
            if (itemValue == "") {
                data[i].addClass("warning-inputs");
                errors = false
            } else {
                data[i].removeClass("warning-inputs");
                errors = true
            }
        }
        return (errors)
    }

    function sendAjaxRequest(data) {
        $.ajax({
            url: '/make_order/',
            type: 'POST',
            contentType: false,
            processData: false,
            data: JSON.stringify(data),
            dataType: 'json',
            headers: {"Content-Type": "application/json", "X-CSRFToken": csrfToken},
            success: () => {
            },
            error: () => {
                // $('#response_stock_modal_1').text("РѕС€РёР±РєР°");
            }
        });
    }

    [].forEach.call(document.querySelectorAll('#phone'), function (input) {
        var keyCode;

        function mask(event) {
            event.keyCode && (keyCode = event.keyCode);
            var pos = this.selectionStart;
            if (pos < 3) event.preventDefault();
            var matrix = "+7 (___) ___ ____",
                i = 0,
                def = matrix.replace(/\D/g, ""),
                val = this.value.replace(/\D/g, ""),
                new_value = matrix.replace(/[_\d]/g, function (a) {
                    return i < val.length ? val.charAt(i++) || def.charAt(i) : a
                });
            i = new_value.indexOf("_");
            if (i != -1) {
                i < 5 && (i = 3);
                new_value = new_value.slice(0, i)
            }
            var reg = matrix.substr(0, this.value.length).replace(/_+/g,
                function (a) {
                    return "\\d{1," + a.length + "}"
                }).replace(/[+()]/g, "\\$&");
            reg = new RegExp("^" + reg + "$");
            if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
            if (event.type == "blur" && this.value.length < 5) this.value = ""
        }

        input.addEventListener("input", mask, false);
        input.addEventListener("focus", mask, false);
        input.addEventListener("blur", mask, true);
        input.addEventListener("keydown", mask, false)
    });

});