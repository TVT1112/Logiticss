import React, { useState } from 'react'
import { Packer, Document, Paragraph, TextRun } from 'docx';
import { saveAs } from 'file-saver';
import './FileWord.css'
const FileWord = () => {
    const [text, setText]=useState("")
    const generateWord = () => {
        const doc = new Document({
          sections: [
            {
              properties: {},
              children: [
                new Paragraph({
                  children: [
                    new TextRun(text), // Chèn nội dung vào trong Word document
                  ],
                }),
              ],
            },
          ],
        });
    
        // Chuyển đổi document thành blob và tải về file
        Packer.toBlob(doc).then((blob) => {
          saveAs(blob, "danhgia.docx"); // Tải file về với tên document.docx
          console.log("Document created successfully");
        });
      };
  
  return (
    <div className='fileword'>
      <h1>Hãy ghi đánh giá vào đây</h1>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Nhập nội dung vào đây..."
      />
      <br />
      <button onClick={generateWord} >
        Tải về File Word
      </button>
    </div>
  )
}

export default FileWord