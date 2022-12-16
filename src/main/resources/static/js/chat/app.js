
function commonAjax(url, parameter, type, calbak, contentType) {
    $.ajax({
        url: '/chat' + url,
        data: JSON.stringify(parameter),
        type: type,
        contentType: contentType != null ? contentType : 'application/json; charset=UTF-8',
        success: function (res) {
            calbak(res);
        },
        error: function (err) {
            console.log('error');
            calbak(err);
        }
    });
}

function ajaxMessage(message) {
    const messages = message.split(['|']);
    for (let i = 1; i < messages.length; i++) {
        ((x) => {
            setTimeout(() => {
                showMessage("받은 메시지: " + messages[i]); //서버에 메시지 전달 후 리턴받는 메시지
            }, 300 * x);
        })(i);
    }
}

function setConnected(connected) {
    $("#connect").prop("disabled", connected);
    $("#conversation").show();
    $("#msg").html("");
}


function showMessage(message) {
    $("#communicate").append("<tr><td>" + message + "</td></tr>");
}



$(function () {
    $("form").on('submit', function (e) {
        e.preventDefault();
    });
    $("#sendForm").hide();
    $("#send").click(function () { sendMessage(); });
    $("#connect").click(function () {
        basicmessage();
    });
});



// 질문 js


$(document).on("click", ".botcat", (e) => {
    e.stopImmediatePropagation();
    showMessage($(e.target).text());
    $(e.target).parent().remove();
    commonAjax("/sendMessage", $(e.target).text(), 'POST', function (message) {
        ajaxMessage(message);
    })
    cid = e.target.id;
    setTimeout(() => {
        if (cid.includes('qna')) {
            qnabtn();
        } else if (cid.includes('guide')) {
            guidebtn();
        } else if (cid.includes('precautions')) {
            prebtn();
        } else if (cid.includes('import')) {
            importbtn();
        } else if (cid.includes('info')) {
            infobtn();
        }
    }, 2000);
});

$(document).on("click", ".botbtn", (e) => {
    showMessage($(e.target).text());
    $(e.target).parent().remove();
    commonAjax("/sendMessage", $(e.target).text(), 'POST', function (message) {
        ajaxMessage(message);
    })
    bid = e.target.id;
    setTimeout(() => {
        if (bid.includes('qna')) {
            qnabtn();
        } else if (bid.includes('guide')) {
            guidebtn();
        } else if (bid.includes('precautions')) {
            prebtn();
        } else if (bid.includes('import')) {
            importbtn();
        } else if (bid.includes('info')) {
            infobtn();
        }
    }, 2000);
});

$(document).on("click", "#chatbtn", (e) => {
    showMessage($(e.target).text());
    $(e.target).parent().remove();
    commonAjax("/sendMessage", $(e.target).text(), 'POST', function (message) {
        ajaxMessage(message);
    })
    $("#communicate").append('<div class="bot chat">' +
        '<button type="button" class="btn btn-default con" id="chatConnect">상담시작</button>' +
        '<button type="button" class="btn btn-default" id="home">이전단계</button>' +
        '</div>')
});

$(document).on("click", "#chatConnect", (e) => {
    showMessage($(e.target).text());
    $(e.target).parent().remove();
    $("#sendForm").show();
    createRoom();
});

$(document).on("click", "#home", (e) => {
    $(e.target).parent().remove();
    basicmessage();
});
