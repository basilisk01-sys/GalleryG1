document.addEventListener('DOMContentLoaded', () => {
    const imageGallery = document.getElementById('imageGallery');
    const searchInput = document.getElementById('searchInput');
    const messageBox = document.getElementById('messageBox');

    // สมมติว่าคุณมีโฟลเดอร์รูปภาพชื่อ "images"
    // และมีรูปภาพชื่อ image1.jpg, image2.jpg, ...
    // คุณควรมีรูปภาพเหล่านี้อยู่ในโฟลเดอร์ 'images' ในโครงสร้างโปรเจกต์ของคุณ
    const images = [
        
        // AMB24
        { name: 'AMB24', src: 'https://i.postimg.cc/YqF6MsGj/topup.jpg', tags: ['AMB24','ฝาก'] },
        { name: 'AMB24', src: 'https://i.postimg.cc/6qkCCdS9/affiliate.jpg', tags: ['AMB24','พันธมิตร'] },
        { name: 'AMB24', src: 'https://i.postimg.cc/QtnQdLJK/forgotpassowrd.jpg', tags: ['AMB24','ลืมรหัส'] },
        { name: 'AMB24', src: 'https://i.postimg.cc/44qvCg3r/register.jpg', tags: ['AMB24','สมัคร'] },
        // { name: '', src: '', tags: ['','เปลี่ยนไอดี'] },
        { name: 'AMB24', src: 'https://i.postimg.cc/hvz9JC2y/addbank.jpg', tags: ['AMB24','เพิ่มบัญชี'] },
        
        //BAHT333
        { name: 'BAHT333', src: 'https://i.postimg.cc/05LTbyx8/topup.jpg', tags: ['BAHT333','ฝาก'] },
        { name: 'BAHT333', src: 'https://i.postimg.cc/k4HyYGwD/aff.jpg', tags: ['BAHT333','พันธมิตร'] },
        { name: 'BAHT333', src: 'https://i.postimg.cc/DfJVvb9j/resetpass.jpg', tags: ['BAHT333','ลืมรหัส'] },
        { name: 'BAHT333', src: 'https://i.postimg.cc/j2J4pTkc/regis.jpg', tags: ['BAHT333','สมัคร'] },
        { name: 'BAHT333', src: 'https://i.postimg.cc/rzXNcHBk/changeid.jpg', tags: ['BAHT333','เปลี่ยนไอดี'] },
        { name: 'BAHT333', src: 'https://i.postimg.cc/cHCmcwRV/addbank.jpg', tags: ['BAHT333','เพิ่มบัญชี'] },
        //BKM777
        { name: 'BKM777', src: 'https://i.postimg.cc/ZK41rD9g/image.png', tags: ['BKM777','ฝาก'] },
        { name: 'BKM777', src: 'https://i.postimg.cc/L4zcgMsL/image.png', tags: ['BKM777','พันธมิตร'] },
        { name: 'BKM777', src: 'https://i.postimg.cc/m2jKVNCr/image.png', tags: ['BKM777','ลืมรหัส'] },
        { name: 'BKM777', src: 'https://i.postimg.cc/HkLRNc99/image.png', tags: ['BKM777','สมัคร'] },
        { name: 'BKM777', src: 'https://i.postimg.cc/nrtNS33X/image.png', tags: ['BKM777','เปลี่ยนไอดี'] },
        { name: 'BKM777', src: 'https://i.postimg.cc/VNJyJrSk/image.png', tags: ['BKM777','เพิ่มบัญชี'] },
        // BKM88
        { name: '', src: '', tags: ['','ฝาก'] },
        { name: '', src: '', tags: ['','พันธมิตร'] },
        { name: '', src: '', tags: ['','ลืมรหัส'] },
        { name: '', src: '', tags: ['','สมัคร'] },
        { name: '', src: '', tags: ['','เปลี่ยนไอดี'] },
        { name: '', src: '', tags: ['','เพิ่มบัญชี'] },
        // FAH999
        { name: '', src: '', tags: ['','ฝาก'] },
        { name: '', src: '', tags: ['','พันธมิตร'] },
        { name: '', src: '', tags: ['','ลืมรหัส'] },
        { name: '', src: '', tags: ['','สมัคร'] },
        { name: '', src: '', tags: ['','เปลี่ยนไอดี'] },
        { name: '', src: '', tags: ['','เพิ่มบัญชี'] },
        // JKR88
        { name: '', src: '', tags: ['','ฝาก'] },
        { name: '', src: '', tags: ['','พันธมิตร'] },
        { name: '', src: '', tags: ['','ลืมรหัส'] },
        { name: '', src: '', tags: ['','สมัคร'] },
        { name: '', src: '', tags: ['','เปลี่ยนไอดี'] },
        { name: '', src: '', tags: ['','เพิ่มบัญชี'] },
        // KHA999
        { name: '', src: '', tags: ['','ฝาก'] },
        { name: '', src: '', tags: ['','พันธมิตร'] },
        { name: '', src: '', tags: ['','ลืมรหัส'] },
        { name: '', src: '', tags: ['','สมัคร'] },
        { name: '', src: '', tags: ['','เปลี่ยนไอดี'] },
        { name: '', src: '', tags: ['','เพิ่มบัญชี'] },
        // KHAB555
        { name: '', src: '', tags: ['','ฝาก'] },
        { name: '', src: '', tags: ['','พันธมิตร'] },
        { name: '', src: '', tags: ['','ลืมรหัส'] },
        { name: '', src: '', tags: ['','สมัคร'] },
        { name: '', src: '', tags: ['','เปลี่ยนไอดี'] },
        { name: '', src: '', tags: ['','เพิ่มบัญชี'] },
        // MAX555
        { name: '', src: '', tags: ['','ฝาก'] },
        { name: '', src: '', tags: ['','พันธมิตร'] },
        { name: '', src: '', tags: ['','ลืมรหัส'] },
        { name: '', src: '', tags: ['','สมัคร'] },
        { name: '', src: '', tags: ['','เปลี่ยนไอดี'] },
        { name: '', src: '', tags: ['','เพิ่มบัญชี'] },
        // MVPWIN555
        { name: '', src: '', tags: ['','ฝาก'] },
        { name: '', src: '', tags: ['','พันธมิตร'] },
        { name: '', src: '', tags: ['','ลืมรหัส'] },
        { name: '', src: '', tags: ['','สมัคร'] },
        { name: '', src: '', tags: ['','เปลี่ยนไอดี'] },
        { name: '', src: '', tags: ['','เพิ่มบัญชี'] },
        // PGBKK999
        { name: '', src: '', tags: ['','ฝาก'] },
        { name: '', src: '', tags: ['','พันธมิตร'] },
        { name: '', src: '', tags: ['','ลืมรหัส'] },
        { name: '', src: '', tags: ['','สมัคร'] },
        { name: '', src: '', tags: ['','เปลี่ยนไอดี'] },
        { name: '', src: '', tags: ['','เพิ่มบัญชี'] },
        // PGFANS888
        { name: '', src: '', tags: ['','ฝาก'] },
        { name: '', src: '', tags: ['','พันธมิตร'] },
        { name: '', src: '', tags: ['','ลืมรหัส'] },
        { name: '', src: '', tags: ['','สมัคร'] },
        { name: '', src: '', tags: ['','เปลี่ยนไอดี'] },
        { name: '', src: '', tags: ['','เพิ่มบัญชี'] },
        // PGLINE777
        { name: '', src: '', tags: ['','ฝาก'] },
        { name: '', src: '', tags: ['','พันธมิตร'] },
        { name: '', src: '', tags: ['','ลืมรหัส'] },
        { name: '', src: '', tags: ['','สมัคร'] },
        { name: '', src: '', tags: ['','เปลี่ยนไอดี'] },
        { name: '', src: '', tags: ['','เพิ่มบัญชี'] },
        // PGLUCKY88
        { name: '', src: '', tags: ['','ฝาก'] },
        { name: '', src: '', tags: ['','พันธมิตร'] },
        { name: '', src: '', tags: ['','ลืมรหัส'] },
        { name: '', src: '', tags: ['','สมัคร'] },
        { name: '', src: '', tags: ['','เปลี่ยนไอดี'] },
        { name: '', src: '', tags: ['','เพิ่มบัญชี'] },
        // PGNEKO88
        { name: '', src: '', tags: ['','ฝาก'] },
        { name: '', src: '', tags: ['','พันธมิตร'] },
        { name: '', src: '', tags: ['','ลืมรหัส'] },
        { name: '', src: '', tags: ['','สมัคร'] },
        { name: '', src: '', tags: ['','เปลี่ยนไอดี'] },
        { name: '', src: '', tags: ['','เพิ่มบัญชี'] },
        // PGWIN828
        { name: '', src: '', tags: ['','ฝาก'] },
        { name: '', src: '', tags: ['','พันธมิตร'] },
        { name: '', src: '', tags: ['','ลืมรหัส'] },
        { name: '', src: '', tags: ['','สมัคร'] },
        { name: '', src: '', tags: ['','เปลี่ยนไอดี'] },
        { name: '', src: '', tags: ['','เพิ่มบัญชี'] },
        // peh888 example
        { name: 'PEH888', src: 'https://i.postimg.cc/SNMB4gNK/image.png', tags: ['PEH88','ฝาก'] },
        { name: 'PEH888', src: 'https://i.postimg.cc/6pxDpCyf/image.png', tags: ['PEH888','พันธมิตร'] },
        { name: 'PEH888', src: 'https://i.postimg.cc/y8h2gWR4/image.png', tags: ['PEH888','ลืมรหัส'] },
        { name: 'PEH888', src: 'https://i.postimg.cc/SKy3WqLX/image.png', tags: ['PEH888','สมัคร'] },
        { name: 'PEH888', src: 'https://i.postimg.cc/qBYPWPrY/image.png', tags: ['PEH888','เปลี่ยนไอดี'] },
        { name: 'PEH888', src: 'https://i.postimg.cc/8cqxW6wD/image.png', tags: ['PEH888','เพิ่มบัญชี'] },
        // PRT555
        { name: '', src: '', tags: ['','ฝาก'] },
        { name: '', src: '', tags: ['','พันธมิตร'] },
        { name: '', src: '', tags: ['','ลืมรหัส'] },
        { name: '', src: '', tags: ['','สมัคร'] },
        { name: '', src: '', tags: ['','เปลี่ยนไอดี'] },
        { name: '', src: '', tags: ['','เพิ่มบัญชี'] },
        // QUA777
        { name: '', src: '', tags: ['','ฝาก'] },
        { name: '', src: '', tags: ['','พันธมิตร'] },
        { name: '', src: '', tags: ['','ลืมรหัส'] },
        { name: '', src: '', tags: ['','สมัคร'] },
        { name: '', src: '', tags: ['','เปลี่ยนไอดี'] },
        { name: '', src: '', tags: ['','เพิ่มบัญชี'] },
        // RWY88
        { name: '', src: '', tags: ['','ฝาก'] },
        { name: '', src: '', tags: ['','พันธมิตร'] },
        { name: '', src: '', tags: ['','ลืมรหัส'] },
        { name: '', src: '', tags: ['','สมัคร'] },
        { name: '', src: '', tags: ['','เปลี่ยนไอดี'] },
        { name: '', src: '', tags: ['','เพิ่มบัญชี'] },
        // TAU369
        { name: '', src: '', tags: ['','ฝาก'] },
        { name: '', src: '', tags: ['','พันธมิตร'] },
        { name: '', src: '', tags: ['','ลืมรหัส'] },
        { name: '', src: '', tags: ['','สมัคร'] },
        { name: '', src: '', tags: ['','เปลี่ยนไอดี'] },
        { name: '', src: '', tags: ['','เพิ่มบัญชี'] },
        // THA555
        { name: '', src: '', tags: ['','ฝาก'] },
        { name: '', src: '', tags: ['','พันธมิตร'] },
        { name: '', src: '', tags: ['','ลืมรหัส'] },
        { name: '', src: '', tags: ['','สมัคร'] },
        { name: '', src: '', tags: ['','เปลี่ยนไอดี'] },
        { name: '', src: '', tags: ['','เพิ่มบัญชี'] },
        // TKB108
        { name: '', src: '', tags: ['','ฝาก'] },
        { name: '', src: '', tags: ['','พันธมิตร'] },
        { name: '', src: '', tags: ['','ลืมรหัส'] },
        { name: '', src: '', tags: ['','สมัคร'] },
        { name: '', src: '', tags: ['','เปลี่ยนไอดี'] },
        { name: '', src: '', tags: ['','เพิ่มบัญชี'] },
        // TKB123
        { name: '', src: '', tags: ['','ฝาก'] },
        { name: '', src: '', tags: ['','พันธมิตร'] },
        { name: '', src: '', tags: ['','ลืมรหัส'] },
        { name: '', src: '', tags: ['','สมัคร'] },
        { name: '', src: '', tags: ['','เปลี่ยนไอดี'] },
        { name: '', src: '', tags: ['','เพิ่มบัญชี'] },
        // TKB1338
        { name: '', src: '', tags: ['','ฝาก'] },
        { name: '', src: '', tags: ['','พันธมิตร'] },
        { name: '', src: '', tags: ['','ลืมรหัส'] },
        { name: '', src: '', tags: ['','สมัคร'] },
        { name: '', src: '', tags: ['','เปลี่ยนไอดี'] },
        { name: '', src: '', tags: ['','เพิ่มบัญชี'] },
        // TKB889
        { name: '', src: '', tags: ['','ฝาก'] },
        { name: '', src: '', tags: ['','พันธมิตร'] },
        { name: '', src: '', tags: ['','ลืมรหัส'] },
        { name: '', src: '', tags: ['','สมัคร'] },
        { name: '', src: '', tags: ['','เปลี่ยนไอดี'] },
        { name: '', src: '', tags: ['','เพิ่มบัญชี'] },
        // VICTORY555
        { name: '', src: '', tags: ['','ฝาก'] },
        { name: '', src: '', tags: ['','พันธมิตร'] },
        { name: '', src: '', tags: ['','ลืมรหัส'] },
        { name: '', src: '', tags: ['','สมัคร'] },
        { name: '', src: '', tags: ['','เปลี่ยนไอดี'] },
        { name: '', src: '', tags: ['','เพิ่มบัญชี'] },
        // ZIP555
        { name: '', src: '', tags: ['','ฝาก'] },
        { name: '', src: '', tags: ['','พันธมิตร'] },
        { name: '', src: '', tags: ['','ลืมรหัส'] },
        { name: '', src: '', tags: ['','สมัคร'] },
        { name: '', src: '', tags: ['','เปลี่ยนไอดี'] },
        { name: '', src: '', tags: ['','เพิ่มบัญชี'] },
        // 
        { name: '', src: '', tags: ['','ฝาก'] },
        { name: '', src: '', tags: ['','พันธมิตร'] },
        { name: '', src: '', tags: ['','ลืมรหัส'] },
        { name: '', src: '', tags: ['','สมัคร'] },
        { name: '', src: '', tags: ['','เปลี่ยนไอดี'] },
        { name: '', src: '', tags: ['','เพิ่มบัญชี'] },
    ];

    function displayImages(filteredImages) {
        imageGallery.innerHTML = ''; // ล้างรูปภาพเดิมทั้งหมด
        hideMessageBox(); // ซ่อนข้อความแจ้งเตือน

        if (filteredImages.length === 0) {
            showMessageBox('ไม่พบรายการที่ค้นหา');
            return;
        }

        filteredImages.forEach(image => {
            const imgDiv = document.createElement('div');
            imgDiv.classList.add('image-item'); // เพิ่มคลาสสำหรับจัดสไตล์

            const imgElement = document.createElement('img');
            imgElement.src = image.src;
            imgElement.alt = image.name;

            imgDiv.appendChild(imgElement);
            imageGallery.appendChild(imgDiv);
        });
    }

    function filterImages() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        let filtered = [];

        if (searchTerm === '') {
            filtered = images; // ถ้าไม่มีคำค้นหา ให้แสดงทั้งหมด
        } else {
            filtered = images.filter(image =>
                image.name.toLowerCase().includes(searchTerm) ||
                (image.tags && image.tags.some(tag => tag.toLowerCase().includes(searchTerm)))
            );
        }
        displayImages(filtered);
    }

    function showMessageBox(message) {
        messageBox.textContent = message;
        messageBox.classList.add('visible');
    }

    function hideMessageBox() {
        messageBox.classList.remove('visible');
        messageBox.textContent = '';
    }

    // Event listener สำหรับช่องค้นหา
    searchInput.addEventListener('input', filterImages);

    // แสดงรูปภาพทั้งหมดเมื่อโหลดหน้าเว็บครั้งแรก
    filterImages();
});