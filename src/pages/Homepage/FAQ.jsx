import React, { useState } from "react";
import { ReactComponent as Star1 } from "../../img/star1.svg";
import { ReactComponent as Star2 } from "../../img/star2.svg";
import { ReactComponent as Plus } from "../../img/plus.svg";
import { ReactComponent as Minus } from "../../img/minus.svg";

const faq = [
  {
    id: 1,
    no: 1,
    ques: "Apa itu Pemira?",
    ans: "Pemira adalah singkatan untuk Pemilihan Raya, yaitu adalah rangkaian acara dimulai dari pencarian sampai pemilihan dan pengumuman ketua baru Himakom",
  },
  {
    id: 2,
    no: 2,
    ques: "Siapa yang berhak mencalonkan diri?",
    ans: "Pengurus Himakom 2021/2022",
  },
  {
    id: 3,
    no: 3,
    ques: "Siapa yang berhak memilih?",
    ans: "Semua mahasiswa aktif Ilmu Komputer angkatan 2019-2022",
  },
  {
    id: 4,
    no: 4,
    ques: "Kapan rangkaian acaranya?",
    ans: "17 Oktober - 18 November",
  },
  {
    id: 5,
    no: 5,
    ques: "Bagaimana tata cara votingnya?",
    ans: "Panitia akan mengarahkan pemilih ke bilik pos voting dan melakukan voting pada laptop yang telah disediakan di bilik.",
  },
  {
    id: 6,
    no: 6,
    ques: "Dimana Pemira dilaksanakan?",
    ans: "Untuk debat, di Audit. Lantai 1. Untuk voting, di bilik pos voting menggunakan website. Untuk pengumuman, di Audit. Lantai 1",
  },
];

const FAQ = () => {
  const [selected, setSelected] = useState(undefined);

  const buttonHandler = (e, id, i) => {
    e.currentTarget.classList.toggle("active");
    if (id !== selected) {
      const button = document.querySelectorAll(".faq-button");
      button.forEach((btn, index) => {
        if (index !== i) {
          btn.classList.remove("active");
        }
      });
      setSelected(id);
    } else {
      const button = document.querySelectorAll(".faq-button");
      button.forEach(btn => {
        btn.classList.remove("active");
      });
      setSelected(undefined);
    }
  };

  return (
    <div className='h-max-screen justify-center p-8 sm:p-10 md:p-12 lg:p-16 pb-64 md:pb-0 font-prata bg-[#21201D] timeline-bg-sm-l'>
      <div
        data-aos='fade-in'
        className='flex justify-evenly px-4 md:px-28 xl:px-32 py-8 md:py-12 lg:py-16'
      >
        <div className='grid items-center'>
          <Star1 className='hidden md:block scale-[60%] md:scale-[70%] lg:scale-100' />
        </div>
        <h1 className='text-xl md:text-2xl lg:text-4xl xl:text-5xl prim-color grid items-center text-center'>
          Frequently Asked Questions
        </h1>
        <div className='grid items-center'>
          <Star2 className='hidden md:block scale-[60%] md:scale-[70%] lg:scale-100' />
        </div>
      </div>
      <div className='space-y-4'>
        {faq.map((items, i) => (
          <div data-aos='fade-in' key={i}>
            <button
              className='faq button faq-button px-4'
              onClick={e => {
                buttonHandler(e, items.id, i);
              }}
            >
              <div className='flex justify-between'>
                <div className='grid place-items-center'>
                  <h1
                    className='circle-no mr-2 lg:mr-4 
                                text-[#F1C88C] text-sm md:text-base lg:text-lg'
                  >
                    {items.no}
                  </h1>
                </div>
                <div className='flex justify-between w-full'>
                  <h2 className='grid items-center text-left'>{items.ques}</h2>
                  <span className='grid items-center'>
                    {items.id === selected ? (
                      <Minus className='scale-50' />
                    ) : (
                      <Plus className='scale-50' />
                    )}
                  </span>
                </div>
              </div>
            </button>
            {selected === items.id && (
              <div className='font-inter text-justify text-[16px] text-[#E6E6E6]'>
                <li className='ans px-10 md:px-13 lg:px-14 py-3 md:py-4 lg:py-5'>
                  {items.ans}
                </li>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
