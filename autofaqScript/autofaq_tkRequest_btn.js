setInterval(() => {
    if (window.location.href === "https://skyeng.autofaq.ai/tickets/assigned") {
	if (document.getElementsByClassName('ant-btn expert-get_ticket ant-btn-block')[1].textContent == "Взять запрос (0)") {
		document.getElementsByClassName('ant-btn expert-get_ticket ant-btn-block')[1].style.backgroundColor = "white";
	} else document.getElementsByClassName('ant-btn expert-get_ticket ant-btn-block')[1].style.backgroundColor = "red";
    }
}, 5000);
