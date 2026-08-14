import fs from 'fs';
import path from 'path';

// Generate a valid minimal PDF file with Ankit Raj's resume text
function generatePDF() {
  const content = `
%PDF-1.4
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
2 0 obj
<< /Type /Pages /Kids [3 0 R] /Count 1 >>
endobj
3 0 obj
<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> >>
endobj
4 0 obj
<< /Length 1200 >>
stream
BT
/F2 22 Tf
50 740 Td
(ANKIT RAJ) Tj
0 -24 Td
/F1 12 Tf
(Muzaffarpur, Bihar, India | +91 7564853697 | ankitraj25581@gmail.com) Tj
0 -16 Td
(LinkedIn: linkedin.com/in/ankit-raj-212b66245 | GitHub: github.com/ankitraj2000) Tj
0 -28 Td
/F2 14 Tf
(PROFESSIONAL SUMMARY) Tj
0 -18 Td
/F1 10 Tf
(Passionate software developer pursuing MCA at LPU with a strong background in Java, Spring Boot, React,) Tj
0 -14 Td
(SQL, Python, and full-stack development. Experienced in building full-stack applications and ML analytics.) Tj
0 -28 Td
/F2 14 Tf
(EDUCATION) Tj
0 -18 Td
/F2 11 Tf
(Master of Computer Applications (MCA)) Tj
0 -14 Td
/F1 10 Tf
(Lovely Professional University (LPU), Phagwara, Punjab | 2025 - 2027 | CGPA: 8.23) Tj
0 -18 Td
/F2 11 Tf
(Bachelor of Computer Applications (BCA)) Tj
0 -14 Td
/F1 10 Tf
(M.M.H.A.P.U. University, Patna, Bihar | 2021 - 2024 | Percentage: 78%) Tj
0 -18 Td
/F2 11 Tf
(Intermediate (Class XII)) Tj
0 -14 Td
/F1 10 Tf
(Dr. R.M.L.S. College, Muzaffarpur, Bihar | 2017 - 2019 | Percentage: 75%) Tj
0 -28 Td
/F2 14 Tf
(TECHNICAL SKILLS) Tj
0 -18 Td
/F1 10 Tf
(Languages: C, C++, Java, Python, PHP, JavaScript, HTML, CSS, SQL) Tj
0 -14 Td
(Technologies: Git, GitHub, Linux, Excel, PostgreSQL, Spring Boot, React, NumPy, Pandas, Scikit-learn) Tj
0 -14 Td
(Core Concepts: Object-Oriented Programming, Database Management Systems, Data Structures & Algorithms) Tj
0 -28 Td
/F2 14 Tf
(FEATURED PROJECTS) Tj
0 -18 Td
/F2 11 Tf
(Expense Tracker (Full-Stack Web App)) Tj
0 -14 Td
/F1 10 Tf
(- Built using Spring Boot, React, PostgreSQL, RESTful APIs, and JWT Authentication.) Tj
0 -14 Td
(- Features: Expense categorization, dashboard analytics, monthly reports, secure auth.) Tj
0 -18 Td
/F2 11 Tf
(Traffic Accident Analysis (Machine Learning)) Tj
0 -14 Td
/F1 10 Tf
(- Developed using Python, Pandas, NumPy, Matplotlib, and Scikit-learn.) Tj
0 -14 Td
(- Conducted EDA, predictive modeling, and accident pattern visualization.) Tj
0 -18 Td
/F2 11 Tf
(ATM Management System (Java & MySQL)) Tj
0 -14 Td
/F1 10 Tf
(- Simulated banking operations using Java, JDBC, and MySQL database.) Tj
0 -28 Td
/F2 14 Tf
(CERTIFICATIONS & ACHIEVEMENTS) Tj
0 -18 Td
/F1 10 Tf
(- 2nd Prize in BrainBytes Coding Competition (April 2026, Boom Script Club LPU)) Tj
0 -14 Td
(- Participant in HackManthan 2025 24-Hour Hackathon (November 2025, LPU)) Tj
0 -14 Td
(- Certifications: Java Programming (Neocolab), C++ (Udemy), C Programming (Great Learning)) Tj
ET
endstream
endobj
5 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>
endobj
6 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>
endobj
xref
0 7
0000000000 65535 f 
0000000009 00000 n 
0000000056 00000 n 
0000000111 00000 n 
0000000244 00000 n 
0000001500 00000 n 
0000001567 00000 n 
trailer
<< /Size 7 /Root 1 0 R >>
startxref
1639
%%EOF
`;

  const publicDir = path.resolve('public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  fs.writeFileSync(path.join(publicDir, 'resume.pdf'), content.trim());
  console.log('Successfully generated public/resume.pdf');
}

generatePDF();
