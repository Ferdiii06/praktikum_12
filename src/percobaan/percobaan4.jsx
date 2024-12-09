import './percobaan.css';

function CheckDiscount( isDiscount ) {
    // Menggunakan strict equality untuk perbandingan
    switch (isDiscount) {
        case "yes":
            return <p>Diskon 50% off</p>;
        case "coming":
            return <p>Akan ada diskon . . .</p>;
        default:
            return <p>Belum ada diskon</p>;
    }
}

export default CheckDiscount;
