function generateQrCode() {
    const qrInput = document.getElementById('qrInput').value.trim();
    const qrImage = document.getElementById('qrCodeImage');

    if (qrInput === '') {
        alert('Please enter a value to generate a QR code.');
        return;
    }

    const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(qrInput)}`;

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

document.addEventListener('DOMContentLoaded', () => {
    const select = document.getElementById('optionSelector');
    const qrGenerator = document.getElementById('qrGenerator');
    const qrScanner = document.getElementById('qrScanner');

    select.addEventListener('change', () => {
        const selected = select.value;

        if (selected === 'Qr-Generator') {
            qrGenerator.classList.remove('hidden');
            qrScanner.classList.add('hidden');
            document.getElementById('maincontainer').style.display = 'none';
        } else if (selected === 'Qr-Scanner') {
            qrScanner.classList.remove('hidden');
            qrGenerator.classList.add('hidden');
            document.getElementById('maincontainer').style.display = 'none';
            startQrScanner();
        }
    });
});
