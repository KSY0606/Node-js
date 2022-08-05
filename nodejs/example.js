const saleEvnet = () => {
    let price = document.querySelector("#price").value;  // 정상가격의 입력값 가져오기
    let sale = document.querySelector("#sale").value;    // 할인율의 입력값 가져오기
    let salePrice = price * (sale/100);  // 할인된 금액
    let discountprice = price - salePrice;
    document.querySelector("#result").innerHTML = `상품의 정상 가격은 ${price}원이지만, ${sale}% 할인되는 상품으로 ${salePrice}원을 할인 받아 ${discountprice}원에 구입 할 수 있습니다.`;
}