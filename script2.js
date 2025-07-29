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
        { name: 'BKM88', src: 'https://i.postimg.cc/dQWk4V2g/image.jpg', tags: ['BKM88','ฝาก'] },
        { name: 'BKM88', src: 'https://i.postimg.cc/NFPKMdGQ/image.jpg', tags: ['BKM88','พันธมิตร'] },
        { name: 'BKM88', src: 'https://i.postimg.cc/wT7tPYFM/image.jpg', tags: ['BKM88','ลืมรหัส'] },
        { name: 'BKM88', src: 'https://i.postimg.cc/YqZ4BDy3/image.jpg', tags: ['BKM88','สมัคร'] },
        // { name: '', src: '', tags: ['','เปลี่ยนไอดี'] },
        { name: 'BKM88', src: 'https://i.postimg.cc/pLjmWQwt/image.jpg', tags: ['BKM88','เพิ่มบัญชี'] },
        // FAH999
        { name: 'FAH999', src: 'https://i.postimg.cc/DzFPgKCG/image.jpg', tags: ['','ฝาก'] },
        { name: 'FAH999', src: 'https://i.postimg.cc/s2c9H08N/image.jpg', tags: ['FAH999','พันธมิตร'] },
        { name: 'FAH999', src: 'https://i.postimg.cc/26Sds7N8/2.jpg', tags: ['FAH999','ลืมรหัส'] },
        { name: 'FAH999', src: 'https://i.postimg.cc/1XgGtRzk/image.jpg', tags: ['FAH999','สมัคร'] },
        // { name: 'FAH999', src: '', tags: ['FAH999','เปลี่ยนไอดี'] },
        { name: 'FAH999', src: 'https://i.postimg.cc/V6Z9m0z9/image.jpg', tags: ['FAH999','เพิ่มบัญชี'] },
        // JKR88
        { name: 'JKR88', src: 'https://i.postimg.cc/nr84XbQM/image.png', tags: ['JKR88','ฝาก'] },
        { name: 'JKR88', src: 'https://i.postimg.cc/d1ZRQt3z/1.png', tags: ['JKR88','พันธมิตร'] },
        { name: 'JKR88', src: 'https://i.postimg.cc/qBnc9R9K/image.png', tags: ['JKR88','ลืมรหัส'] },
        { name: 'JKR88', src: 'https://i.postimg.cc/15Q0PSQj/image.png', tags: ['JKR88','สมัคร'] },
        // { name: 'JKR88', src: '', tags: ['JKR88','เปลี่ยนไอดี'] },
        { name: 'JKR88', src: 'https://i.postimg.cc/1Xpp6CpB/image.png', tags: ['JKR88','เพิ่มบัญชี'] },
        // KHA999
        // { name: 'KHA999', src: '', tags: ['KHA999','ฝาก'] },
        { name: 'KHA999', src: 'https://i.postimg.cc/50zvd7kJ/image.jpg', tags: ['KHA999','พันธมิตร'] },
        { name: 'KHA999', src: 'https://i.postimg.cc/nLg7Wb2T/image.jpg', tags: ['KHA999','ลืมรหัส'] },
        { name: 'KHA999', src: 'https://i.postimg.cc/wMcm3tpb/image.jpg', tags: ['KHA999','สมัคร'] },
        // { name: 'KHA999', src: '', tags: ['KHA999','เปลี่ยนไอดี'] },
        { name: 'KHA999', src: 'https://i.postimg.cc/tJH6X3Lx/image.jpg', tags: ['KHA999','เพิ่มบัญชี'] },
        // { name: 'KHA999', src: '', tags: ['KHA999','ฝาก'] },
        // KHAB555
        { name: 'KHAB555', src: 'https://i.postimg.cc/SKB2rLQv/TOPUP.png', tags: ['KHAB555','ฝาก'] },
        { name: 'KHAB555', src: 'https://i.postimg.cc/YCym4K5k/AFF.png', tags: ['KHAB555','พันธมิตร'] },
        { name: 'KHAB555', src: 'https://i.postimg.cc/cJgtwkW3/Reset-Code.png', tags: ['KHAB555','ลืมรหัส'] },
        { name: 'KHAB555', src: 'https://i.postimg.cc/sDmWrZKM/Regis.png', tags: ['KHAB555','สมัคร'] },
        { name: 'KHAB555', src: 'https://i.postimg.cc/KcnL0WMr/39.png', tags: ['KHAB555','เปลี่ยนไอดี'] },
        { name: 'KHAB555', src: 'https://i.postimg.cc/qv73MMZj/ADDBANK.png', tags: ['KHAB555','เพิ่มบัญชี'] },
        // MAX555
        { name: 'MAX555', src: 'https://i.postimg.cc/DZcvX1Ss/image.jpg', tags: ['MAX555','ฝาก'] },
        { name: 'MAX555', src: 'https://i.postimg.cc/3wmJ3s7t/image.jpg', tags: ['MAX555','พันธมิตร'] },
        { name: 'MAX555', src: 'https://i.postimg.cc/XJWNqsY4/image.jpg', tags: ['MAX555','ลืมรหัส'] },
        { name: 'MAX555', src: 'https://i.postimg.cc/mkXTdRNg/image.jpg', tags: ['MAX555','สมัคร'] },
        // { name: 'MAX555', src: '', tags: ['MAX555','เปลี่ยนไอดี'] },
        { name: 'MAX555', src: 'https://i.postimg.cc/gjkYqrh7/image.jpg', tags: ['MAX555','เพิ่มบัญชี'] },
        // MVPWIN555
        { name: 'MVPWIN555', src: 'https://i.postimg.cc/FK5NCTc3/image.jpg', tags: ['MVPWIN555','ฝาก'] },
        { name: 'MVPWIN555', src: 'https://i.postimg.cc/yYx1Dgsg/image.jpg', tags: ['MVPWIN555','พันธมิตร'] },
        { name: 'MVPWIN555', src: 'https://i.postimg.cc/pXS2zWL0/image.jpg', tags: ['MVPWIN555','ลืมรหัส'] },
        { name: 'MVPWIN555', src: 'https://i.postimg.cc/6QrwkCLS/image.jpg', tags: ['MVPWIN555','สมัคร'] },
        // { name: 'MVPWIN555', src: '', tags: ['MVPWIN555','เปลี่ยนไอดี'] },
        { name: 'MVPWIN555', src: 'https://i.postimg.cc/P58dMgLd/image.jpg', tags: ['MVPWIN555','เพิ่มบัญชี'] },
        // PGBKK999
        { name: 'PGBKK999', src: 'https://i.postimg.cc/BQpmVbKg/TOPUP.png', tags: ['PGBKK999','ฝาก'] },
        { name: 'PGBKK999', src: 'https://i.postimg.cc/XNwH9QNt/AFF.png', tags: ['PGBKK999','พันธมิตร'] },
        { name: 'PGBKK999', src: 'https://i.postimg.cc/L62yDLn5/Reset.png', tags: ['PGBKK999','ลืมรหัส'] },
        { name: 'PGBKK999', src: 'https://i.postimg.cc/Xqcs37Dn/Regis.png', tags: ['PGBKK999','สมัคร'] },
        { name: 'PGBKK999', src: 'https://i.postimg.cc/L5MxrZDy/ID.png', tags: ['PGBKK999','เปลี่ยนไอดี'] },
        { name: 'PGBKK999', src: 'https://i.postimg.cc/qRKmbGsh/ADBANK.png', tags: ['PGBKK999','เพิ่มบัญชี'] },
        // PGFANS888
        { name: 'PGFANS888', src: 'https://i.postimg.cc/4Nf5VGSh/TOPup.png', tags: ['PGFANS888','ฝาก'] },
        { name: 'PGFANS888', src: 'https://i.postimg.cc/wMVQZ47v/AFf.png', tags: ['PGFANS888','พันธมิตร'] },
        { name: 'PGFANS888', src: 'https://i.postimg.cc/mZNjPk8s/reset.png', tags: ['PGFANS888','ลืมรหัส'] },
        { name: 'PGFANS888', src: 'https://i.postimg.cc/Dz96Xb92/register.png', tags: ['PGFANS888','สมัคร'] },
        { name: 'PGFANS888', src: 'https://i.postimg.cc/QCsq6ZNw/ID.png', tags: ['PGFANS888','เปลี่ยนไอดี'] },
        { name: 'PGFANS888', src: 'https://i.postimg.cc/yd0PX8K0/AddBank.png', tags: ['PGFANS888','เพิ่มบัญชี'] },
        // PGLINE777
        { name: 'PGLINE777', src: 'https://i.postimg.cc/7hxg31my/Topup.png', tags: ['PGLINE777','ฝาก'] },
        { name: 'PGLINE777', src: 'https://i.postimg.cc/htwbkdP9/AFF.png', tags: ['PGLINE777','พันธมิตร'] },
        { name: 'PGLINE777', src: 'https://i.postimg.cc/bJ0xSV0T/resetpassword.png', tags: ['PGLINE777','ลืมรหัส'] },
        { name: 'PGLINE777', src: 'https://i.postimg.cc/CKqHSxz9/Register.png', tags: ['PGLINE777','สมัคร'] },
        { name: 'PGLINE777', src: 'https://i.postimg.cc/RFx1Fxth/ID.png', tags: ['PGLINE777','เปลี่ยนไอดี'] },
        { name: 'PGLINE777', src: 'https://i.postimg.cc/6pTfb0wW/addbank.png', tags: ['PGLINE777','เพิ่มบัญชี'] },
        // PGLUCKY88
        { name: 'PGLUCKY88', src: 'https://i.postimg.cc/0QZvQx40/image.png', tags: ['PGLUCKY88','ฝาก'] },
        { name: 'PGLUCKY88', src: 'https://i.postimg.cc/brBjxgpG/1.png', tags: ['PGLUCKY88','พันธมิตร'] },
        { name: 'PGLUCKY88', src: 'https://i.postimg.cc/fyLNSpnn/image.png', tags: ['PGLUCKY88','ลืมรหัส'] },
        { name: 'PGLUCKY88', src: 'https://i.postimg.cc/L6JSHc3j/image.png', tags: ['PGLUCKY88','สมัคร'] },
        // { name: 'PGLUCKY88', src: '', tags: ['PGLUCKY88','เปลี่ยนไอดี'] },
        { name: 'PGLUCKY88', src: 'https://i.postimg.cc/LXmR2hxs/image.png', tags: ['PGLUCKY88','เพิ่มบัญชี'] },
        // PGNEKO88
        { name: 'PGNEKO88', src: 'https://i.postimg.cc/kg8dSWZ4/image.jpg', tags: ['PGNEKO88','ฝาก'] },
        { name: 'PGNEKO88', src: 'https://i.postimg.cc/N0cvk5qx/image.jpg', tags: ['PGNEKO88','พันธมิตร'] },
        { name: 'PGNEKO88', src: 'https://i.postimg.cc/mDZxKJrz/image.jpg', tags: ['PGNEKO88','ลืมรหัส'] },
        { name: 'PGNEKO88', src: 'https://i.postimg.cc/76Bv49CB/image.jpg', tags: ['PGNEKO88','สมัคร'] },
        // { name: 'PGNEKO88', src: '', tags: ['PGNEKO88','เปลี่ยนไอดี'] },
        { name: 'PGNEKO88', src: 'https://i.postimg.cc/VNWQGmzP/image.jpg', tags: ['PGNEKO88','เพิ่มบัญชี'] },
        // PGWIN828
        { name: 'PGWIN828', src: 'https://i.postimg.cc/J72wdTC0/image.jpg', tags: ['PGWIN828','ฝาก'] },
        { name: 'PGWIN828', src: 'https://i.postimg.cc/pr7ghdJz/image.jpg', tags: ['PGWIN828','พันธมิตร'] },
        { name: 'PGWIN828', src: 'https://i.postimg.cc/1X4k3Fwy/2.jpg', tags: ['PGWIN828','ลืมรหัส'] },
        { name: 'PGWIN828', src: 'https://i.postimg.cc/bN77qsJj/2.jpg', tags: ['PGWIN828','สมัคร'] },
        // { name: 'PGWIN828', src: '', tags: ['PGWIN828','เปลี่ยนไอดี'] },
        { name: 'PGWIN828', src: 'https://i.postimg.cc/WbqRRMsn/image.jpg', tags: ['PGWIN828','เพิ่มบัญชี'] },
        // peh888 example
        { name: 'PEH888', src: 'https://i.postimg.cc/SNMB4gNK/image.png', tags: ['PEH88','ฝาก'] },
        { name: 'PEH888', src: 'https://i.postimg.cc/6pxDpCyf/image.png', tags: ['PEH888','พันธมิตร'] },
        { name: 'PEH888', src: 'https://i.postimg.cc/y8h2gWR4/image.png', tags: ['PEH888','ลืมรหัส'] },
        { name: 'PEH888', src: 'https://i.postimg.cc/SKy3WqLX/image.png', tags: ['PEH888','สมัคร'] },
        { name: 'PEH888', src: 'https://i.postimg.cc/qBYPWPrY/image.png', tags: ['PEH888','เปลี่ยนไอดี'] },
        { name: 'PEH888', src: 'https://i.postimg.cc/8cqxW6wD/image.png', tags: ['PEH888','เพิ่มบัญชี'] },
        // PRT555
        { name: 'PRT555', src: 'https://i.postimg.cc/HLHF7RXZ/image.jpg', tags: ['PRT555','ฝาก'] },
        { name: 'PRT555', src: 'https://i.postimg.cc/8CH9d4b1/image.jpg', tags: ['PRT555','พันธมิตร'] },
        { name: 'PRT555', src: 'https://i.postimg.cc/1t7d2zT2/image.jpg', tags: ['PRT555','ลืมรหัส'] },
        { name: 'PRT555', src: 'https://i.postimg.cc/D0WNTT3Z/image.jpg', tags: ['PRT555','สมัคร'] },
        // { name: 'PRT555', src: '', tags: ['PRT555','เปลี่ยนไอดี'] },
        { name: 'PRT555', src: 'https://i.postimg.cc/j5S9Mf8y/image.jpg', tags: ['PRT555','เพิ่มบัญชี'] },
        // QUA777
        { name: 'QUA777', src: 'https://i.postimg.cc/2ycBns14/TOPUP.png', tags: ['QUA777','ฝาก'] },
        { name: 'QUA777', src: 'https://i.postimg.cc/rmTWTC6t/AFF.png', tags: ['QUA777','พันธมิตร'] },
        { name: 'QUA777', src: 'https://i.postimg.cc/0j2wMkyk/Reset-Password.png', tags: ['QUA777','ลืมรหัส'] },
        { name: 'QUA777', src: 'https://i.postimg.cc/Y9xFCGkD/Register.png', tags: ['QUA777','สมัคร'] },
        { name: 'QUA777', src: 'https://i.postimg.cc/KYBLCpW2/ID.png', tags: ['QUA777','เปลี่ยนไอดี'] },
        { name: 'QUA777', src: 'https://i.postimg.cc/CxWkPpm7/ADDBANK.png', tags: ['QUA777','เพิ่มบัญชี'] },
        // RWY88
        { name: 'RWY88', src: 'https://i.postimg.cc/QdZyRw48/image.jpg', tags: ['RWY88','ฝาก'] },
        { name: 'RWY88', src: 'https://i.postimg.cc/d3zxQxJ9/image.jpg', tags: ['RWY88','พันธมิตร'] },
        { name: 'RWY88', src: 'https://i.postimg.cc/DfDDc81b/image.jpg', tags: ['RWY88','ลืมรหัส'] },
        { name: 'RWY88', src: 'https://i.postimg.cc/525R1gTw/image.jpg', tags: ['RWY88','สมัคร'] },
        // { name: 'RWY88', src: '', tags: ['RWY88','เปลี่ยนไอดี'] },
        { name: 'RWY88', src: 'https://i.postimg.cc/8P6YXNbX/image.jpg', tags: ['RWY88','เพิ่มบัญชี'] },
        // TAU369
        { name: 'TAU369', src: 'https://i.postimg.cc/J02GsjFx/TOPUP.png', tags: ['TAU369','ฝาก'] },
        { name: 'TAU369', src: 'https://i.postimg.cc/VNqrKrSs/AFF.png', tags: ['TAU369','พันธมิตร'] },
        { name: 'TAU369', src: 'https://i.postimg.cc/90MDXLLz/Reset-Password.png', tags: ['TAU369','ลืมรหัส'] },
        { name: 'TAU369', src: 'https://i.postimg.cc/KvWMjySb/Register.png', tags: ['TAU369','สมัคร'] },
        { name: 'TAU369', src: 'https://i.postimg.cc/7ZTTTQw2/ID.png', tags: ['TAU369','เปลี่ยนไอดี'] },
        { name: 'TAU369', src: 'https://i.postimg.cc/3w50jCxb/ADDBank.png', tags: ['TAU369','เพิ่มบัญชี'] },
        // THA555
        { name: 'THA555', src: 'https://i.postimg.cc/43JF3tRj/image.jpg', tags: ['THA555','ฝาก'] },
        { name: 'THA555', src: 'https://i.postimg.cc/26ycQD6w/image.jpg', tags: ['THA555','พันธมิตร'] },
        { name: 'THA555', src: 'https://i.postimg.cc/NMnNbz2w/6.jpg', tags: ['THA555','ลืมรหัส'] },
        { name: 'THA555', src: 'https://i.postimg.cc/qqC1Fx26/6.jpg', tags: ['THA555','สมัคร'] },
        // { name: 'THA555', src: '', tags: ['THA555','เปลี่ยนไอดี'] },
        { name: 'THA555', src: 'https://i.postimg.cc/W4XYq32z/image.jpg', tags: ['THA555','เพิ่มบัญชี'] },
        // TKB108
        { name: 'TKB108', src: 'https://i.postimg.cc/rzXf2R9n/image.jpg', tags: ['TKB108','ฝาก'] },
        { name: 'TKB108', src: 'https://i.postimg.cc/PfgH563c/image.jpg', tags: ['TKB108','พันธมิตร'] },
        { name: 'TKB108', src: 'https://i.postimg.cc/3r477MBm/2.jpg', tags: ['TKB108','ลืมรหัส'] },
        { name: 'TKB108', src: 'https://i.postimg.cc/mgRGQPGy/2.jpg', tags: ['TKB108','สมัคร'] },
        // { name: 'TKB108', src: '', tags: ['TKB108','เปลี่ยนไอดี'] },
        { name: 'TKB108', src: 'https://i.postimg.cc/pXKHhD3d/image.jpg', tags: ['TKB108','เพิ่มบัญชี'] },
        // TKB123
        { name: 'TKB123', src: 'https://i.postimg.cc/8CXQQwfZ/1.png', tags: ['TKB123','ฝาก'] },
        { name: 'TKB123', src: 'https://i.postimg.cc/5t2dRDyH/2.png', tags: ['TKB123','พันธมิตร'] },
        { name: 'TKB123', src: 'https://i.postimg.cc/MpDJtz62/1.png', tags: ['TKB123','ลืมรหัส'] },
        { name: 'TKB123', src: 'https://i.postimg.cc/pT3wyTZ8/2.png', tags: ['TKB123','สมัคร'] },
        // { name: 'TKB123', src: '', tags: ['TKB123','เปลี่ยนไอดี'] },
        { name: 'TKB123', src: 'https://i.postimg.cc/ZR9kT3r4/image.png', tags: ['TKB123','เพิ่มบัญชี'] },
        // TKB1338
        { name: 'TKB1338', src: 'https://i.postimg.cc/3JTqqzbK/image.jpg', tags: ['TKB1338','ฝาก'] },
        { name: 'TKB1338', src: 'https://i.postimg.cc/vTRKbKYt/image.jpg', tags: ['TKB1338','พันธมิตร'] },
        { name: 'TKB1338', src: 'https://i.postimg.cc/9XTSJcb8/image.jpg', tags: ['TKB1338','ลืมรหัส'] },
        { name: 'TKB1338', src: 'https://i.postimg.cc/287tNTPn/image.jpg', tags: ['TKB1338','สมัคร'] },
        // { name: 'TKB1338', src: '', tags: ['TKB1338','เปลี่ยนไอดี'] },
        { name: 'TKB1338', src: 'https://i.postimg.cc/Y01s9xjK/image.jpg', tags: ['TKB1338','เพิ่มบัญชี'] },
        // TKB889
        { name: 'TKB889', src: 'https://i.postimg.cc/CxJ9kJ7w/image.jpg', tags: ['TKB889','ฝาก'] },
        { name: 'TKB889', src: 'https://i.postimg.cc/HLhKPxFK/image.jpg', tags: ['TKB889','พันธมิตร'] },
        { name: 'TKB889', src: 'https://i.postimg.cc/13yL8bpW/image.jpg', tags: ['TKB889','ลืมรหัส'] },
        { name: 'TKB889', src: 'https://i.postimg.cc/fLSF4sNb/image.jpg', tags: ['TKB889','สมัคร'] },
        // { name: 'TKB889', src: '', tags: ['TKB889','เปลี่ยนไอดี'] },
        { name: 'TKB889', src: 'https://i.postimg.cc/g0JQDRt8/image.jpg', tags: ['TKB889','เพิ่มบัญชี'] },
        // VICTORY555
        { name: 'VICTORY555', src: 'https://i.postimg.cc/yxt81sJr/Topup.png', tags: ['VICTORY555','ฝาก'] },
        { name: 'VICTORY555', src: 'https://i.postimg.cc/90rfHrf7/Aff.png', tags: ['VICTORY555','พันธมิตร'] },
        { name: 'VICTORY555', src: 'https://i.postimg.cc/v8NBLLPL/image.png', tags: ['VICTORY555','ลืมรหัส'] },
        { name: 'VICTORY555', src: 'https://i.postimg.cc/QMJCp2PH/REgister.png', tags: ['VICTORY555','สมัคร'] },
        { name: 'VICTORY555', src: 'https://i.postimg.cc/d1W0f8JF/ChangeID.png', tags: ['VICTORY555','เปลี่ยนไอดี'] },
        { name: 'VICTORY555', src: 'https://i.postimg.cc/FRFRGP5G/ADDbank.png', tags: ['VICTORY555','เพิ่มบัญชี'] },
        // ZIP555
        { name: 'ZIP555', src: 'https://i.postimg.cc/QC2jLmP2/Topup.png', tags: ['ZIP555','ฝาก'] },
        { name: 'ZIP555', src: 'https://i.postimg.cc/FRn9pNxs/Aff.png', tags: ['ZIP555','พันธมิตร'] },
        { name: 'ZIP555', src: 'https://i.postimg.cc/Fzdhn8Pb/Reset-Password.png', tags: ['ZIP555','ลืมรหัส'] },
        { name: 'ZIP555', src: 'https://i.postimg.cc/yNj6JFgR/Register.png', tags: ['ZIP555','สมัคร'] },
        { name: 'ZIP555', src: 'https://i.postimg.cc/ZRqb6CpM/ChangeID.png', tags: ['ZIP555','เปลี่ยนไอดี'] },
        { name: 'ZIP555', src: 'https://i.postimg.cc/25r88H6m/ADDbank.png', tags: ['ZIP555','เพิ่มบัญชี'] },
        // example
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
