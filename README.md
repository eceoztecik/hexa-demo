# AI Logo Generator

AI Logo Generator, kullanıcıların yapay zeka destekli logo tasarımları oluşturmasına olanak tanıyan React Native tabanlı bir mobil uygulamadır. Kullanıcılar, istedikleri logo stilini ve açıklamasını girerek benzersiz logo tasarımlarını hızlıca oluşturabilir, oluşturma sürecini takip edebilir ve tamamlanan tasarımları görüntüleyebilirler.

Projede Firebase Firestore kullanılarak logo istekleri ve durumları yönetilmekte. Uygulama hem iOS hem Android platformlarında çalışacak şekilde optimize edilmiştir.

---

## Özellikler

- **Logo oluşturma:** Kullanıcı tarafından girilen açıklamaya ve seçilen stile göre logo tasarımı yapar.
- **Durum takibi:** Tasarım sürecini "processing", "done", "error" gibi durumlar ile görsel olarak gösterir.
- **Stil seçimi:** Farklı logo stilleri arasından seçim yapılabilir.
- **Sürpriz öneriler:** “Surprise Me” butonu ile rastgele önceden tanımlanmış prompt ve stil seçilebilir.
- **Hata yönetimi:** Oluşan hatalarda kullanıcıya tekrar deneme imkanı sunar.
- **Firebase entegrasyonu:** Tasarım istekleri Firestore üzerinde saklanır ve güncellenir.

---

## Proje Yapısı

- `components/`: UI bileşenleri (StatusBanner, LogoPreview, LogoStyleSelector vb.)
- `screens/`: Ekran bileşenleri (InputScreen, OutputScreen vb.)
- `utils/constants.ts`: Önceden tanımlanmış promptlar ve stil eşleştirmeleri.
- `firebase/`: Firebase yapılandırma ve Firestore işlemleri.

---

## Kullanım ve Test

1. **Test İçin Promptlar:**

   Test ve geliştirme aşamasında kullanabileceğiniz örnek promptlar `utils/constants.ts` dosyasında yer almaktadır. Bu promptlar, logo açıklaması ve stil eşleşmeleri içerir ve hızlıca deneme yapmanızı sağlar.

2. **Surprise Me Butonu:**

   Uygulamadaki “🎲 Surprise Me” butonunu aktif olarak kullanabilirsiniz. Bu buton, `constants.ts` içindeki rastgele prompt ve stil kombinasyonlarından birini seçer, böylece yaratıcı ve beklenmedik logo fikirleri ortaya çıkarabilirsiniz.

3. **Error Butonu (Hata Durumu Testi):**

   `InputScreen` dosyasında, hata durumunu test etmek için yorum satırı halinde bir buton bırakılmıştır. Bu yorum satırını açarak (yorumdan çıkararak) kolayca hata senaryosunu tetikleyebilir ve uygulamanın hata yönetimini test edebilirsiniz.

   ```tsx
   {/* 
   <TouchableOpacity onPress={() => setStatus('error')} style={{ marginTop: 20, padding: 10, backgroundColor: 'red' }}>
     <Text style={{ color: 'white' }}>Test Error</Text>
   </TouchableOpacity>
   */}
