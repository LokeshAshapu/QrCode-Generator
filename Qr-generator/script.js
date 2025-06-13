function generateQrCode() {
	const qrInput = document.getElementById('qrInput').value.trim();
    const qrImage = document.getElementById('qrCodeImage');

    if( qrInput === '') {
        alert('Please enter a value to generate a QR code.');
        return;
    }

    const apiUrl= `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(qrInput)}`;

    qrImage.src = apiUrl;
}

function startQrScanner() {
    const scanner = new Html5QrcodeScanner("reader", {
        fps: 10,
        qrbox: 250
    });

    function onScanSuccess(decodedText, decodedResult) {
        const resultElement = document.getElementById("scanResult");
        resultElement.textContent = "Scanned Text: " + decodedText;

        scanner.clear();
    }

    scanner.render(onScanSuccess);
}