import './percobaan.css';
import FotoProduk from "./percobaan1";
import ProdukInfo from "./percobaan2";
import Tambahcart from "./percobaan3";
import CheckDiscount from "./percobaan4";

function Percobaan() {
    return (
    <div className="Parentbox">
    <FotoProduk/>
    <ProdukInfo isDiscount="coming" category="SEPATU" judul="White Beginning"/>
    <Tambahcart/>
    <CheckDiscount/>
    </div>
    );
}

export default Percobaan;
