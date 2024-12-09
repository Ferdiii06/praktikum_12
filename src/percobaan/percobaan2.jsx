import './Percobaan.css';
import Tambahcart from './percobaan3';
import CheckDiscount from './percobaan4';


function ProdukInfo( isDiscount, category, judul ) {
    // Array manfaat produk
    const benefits = ["Anti luntur", "Alas empuk", "Mudah dibersihkan"];

    // Mapping array menjadi elemen list
    const listBenefits = benefits.map((benefit, index) => (
        <li key={index}>{benefit}</li> // Atribut key untuk elemen unik
    ));

    return (
        <div>
            <div className="Deskripsi">
                {/* Kategori Produk */}
                <p className="Cate">{category}</p>

                {/* Judul Produk */}
                <h1 className="Title">{judul}</h1>

                {/* Harga Produk */}
                <p className="Price">IDR 73,309,399</p>

                {/* Komponen untuk menampilkan status diskon */}
                <CheckDiscount isDiscount={isDiscount} />

                {/* Informasi Tambahan */}
                <p className="Info">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>

                {/* Daftar manfaat */}
                <ul>{listBenefits}</ul>

                {/* Tombol Tambah ke Keranjang */}
                <a 
                    onClick={(e) => {
                        e.preventDefault(); // Mencegah reload halaman saat tombol diklik
                        Tambahcart(judul, e);
                    }} 
                    href="#"
                >
                    Add to Cart
                </a>
            </div>
        </div>
    );
}

export default ProdukInfo;
