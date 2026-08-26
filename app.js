async function login() {

    const stockNo =
        document.getElementById("stockNo").value;

    const authCode =
        document.getElementById("authCode").value;

    const message =
        document.getElementById("message");

    message.innerText = "";
    message.className = "";

    const response = await fetch(
        "https://func-stockholder-auth22-ebg8c2cqb3eqdthu.japanwest-01.azurewebsites.net/api/authenticate",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                stockNo: stockNo,
                authCode: authCode
            })
        }
    );

    const result = await response.json();

    if (result.success) {

        window.location.href =
            result.pdfUrl;

    } else {

        message.innerText =
            result.message ||
            "株主番号または認証コードが正しくありません。";

        message.className = "error";
    }
}
