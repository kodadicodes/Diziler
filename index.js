let products = ["iphone5", "samsung", "huawei"];

// Dizinin uzunluğunu bulmak için length yöntemini kullanabiliriz.
let result;
result = products.length;

// Diziyi bir string'e dönüştürmek için toString() yöntemini veya bir ayırıcı ile join() yöntemini kullanabiliriz. toString() yöntemi dizinin elemanlarını virgülle ayırarak bir dizeye dönüştürürken, join() yöntemi belirtilen ayırıcıyı kullanarak dizinin elemanlarını birleştirir.
// result = products.toString();
result = products.join("/");

// Diziden eleman silmek için shift() yöntemini (ilk elemanı siler) veya pop() yöntemini (son elemanı siler) kullanabiliriz. shift() yöntemi dizinin ilk elemanını siler ve geri döndürürken, pop() yöntemi dizinin son elemanını siler ve geri döndürür.
// result = products.shift();
// result = products.pop();

// Dizilere eleman eklemek için push() yöntemini (sona bir eleman ekler) veya unshift() yöntemini (başına bir eleman ekler) kullanabiliriz. push() yöntemi belirtilen elemanı dizinin sonuna eklerken, unshift() yöntemi belirtilen elemanı dizinin başına ekler.
result = products.push("xiaomi");
result = products.unshift("nokia");

// Dizileri birleştirmek için concat() yöntemini veya eleman eklemek/çıkarmak için splice() yöntemini kullanabiliriz. concat() yöntemi birden fazla dizi alarak bu dizilerin elemanlarını birleştirip yeni bir dizi oluşturur. splice() yöntemi ise belirtilen konumdan başlayarak belirtilen sayıda elemanı siler ve isteğe bağlı olarak yeni elemanlar ekleyebilir.
let urunler = ["acer", "casper"];
let urunler2 = ["araba", "ev"];
let urunler3 = ["hp", "monster"];
// result = urunler.concat(urunler2, urunler3);
// result = urunler.splice(0, 0, urunler2);
// result = urunler.splice(0, 1, "elma");
result = urunler.splice(0, 1);

console.log(result);
console.log(urunler);
