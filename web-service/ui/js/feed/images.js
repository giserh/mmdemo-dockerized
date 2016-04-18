function loadimage(end, page, pagenum) {
    $("#end").hide();
    $('#tiles').imagesLoaded(function () {
        var options = {
            autoResize: true,
            container: $('#main'),
            offset: 10,
            itemWidth: 207,
            outerOffset: 0
        };

        var handler = $('#tiles li');
        handler.wookmark(options);

        $("#loading, #loadmore").hide();

        if (end === 1) {
            var noData;
            switch (translation_param) {
                case "en":
                    noData = "No more results";
                    break;
                case "el":
                    noData = "Τέλος Αποτελεσμάτων";
                    break;
                case "it":
                    noData = "Nessun ulteriore risultato";
                    break;
                case "tr":
                    noData = "Daha fazla sonuç bulunamadı";
                    break;
                case "sp":
                    noData = "No hay más resultados";
                    break;
                case "ca":
                    noData = "No hi ha més resultats";
                    break;
                default:
                    noData = "No more results";
            }
            $('#loadingbar').css('width', '105%');
            $('#end p').html(noData);
            $("#end").show();
            setTimeout(function () {
                $('#loadingbar').hide();
                $('#loadingbar').css('width', '0%');
            }, 500);
        }
        else if (end === 99) {
            var noData2;
            switch (translation_param) {
                case "en":
                    noData2 = "No items for keyword:";
                    break;
                case "el":
                    noData2 = "Δεν υπάρχουν δημοσιεύσεις για:";
                    break;
                case "it":
                    noData2 = "Nessun oggetto per la parola chiave:";
                    break;
                case "tr":
                    noData2 = "Bu anahtar kelimeye uygun sonuç bulunamadı:";
                    break;
                case "sp":
                    noData2 = "No hay datos para la palabra clave:";
                    break;
                case "ca":
                    noData = "No hi ha dades relacionades amb la paraula clau:";
                    break;
                default:
                    noData2 = "No items for keyword:";
            }
            $('#end p').html(noData2+"<span style='color:red'> " + page + "</span>");
        }
        else if (end === 2) {
            $("#end").show();
        }

        if ((page === "latest") && (pagelocation === "latest")) {
            if ((pagenum === 1) && (end !== 1)) {
                $('#loadingbar').show();
                $('#loadingbar').css('width', '14%');
                parse_latest(2);
            }
            if ((pagenum === 2) && (end !== 1)) {
                $('#loadingbar').css('width', '28%');
                parse_latest(3);
            }
            if ((pagenum === 3) && (end !== 1)) {
                $('#loadingbar').css('width', '42%');
                parse_latest(4);
            }
            if ((pagenum === 4) && (end !== 1)) {
                $('#loadingbar').css('width', '57%');
                parse_latest(5);
            }
            if ((pagenum === 5) && (end !== 1)) {
                $('#loadingbar').css('width', '71%');
                parse_latest(6);
            }
            if ((pagenum === 6) && (end !== 1)) {
                $('#loadingbar').css('width', '85%');
                parse_latest(7);
            }
            if ((pagenum === 7) && (end !== 1)) {
                $('#loadingbar').css('width', '105%');
                setTimeout(function () {
                    $('#loadingbar').hide();
                    $('#loadingbar').css('width', '0%');
                }, 500);
                more_latest();
                parse_latest(8);
            }
        }
    });
}